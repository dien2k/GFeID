/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Api } from '@/@types/api.type';
import { authStore, initialAuthData } from '@/stores/auth-store';

export const axiosInstant = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: ((token: string) => Promise<any> | void)[] = [];

// EX: Push callback to failedQueue for retry request
function addFailedQueue(cb: (token: string) => Promise<any> | void) {
  failedQueue.push(cb);
}

function processFailedQueue(token: string) {
  failedQueue.map((cb) => cb(token));
  failedQueue = [];
}

function reloadApp() {
  authStore.setAuth(initialAuthData);

  isRefreshing = false;
  failedQueue = [];
  // force reload app, reset all state
  // window.location.reload();
  // window.location.replace(${LOCATION.SIGN_IN}?redirect=${window.history.state.as});
}

const createAuthToken = (token: string) => `Bearer ${token}`;

export function setAppAccessToken(token: string) {
  axiosInstant.defaults.headers.Authorization = createAuthToken(token);
}

axiosInstant.interceptors.request.use((requestConfig) => {
  const token = authStore.access_token;

  if (token) {
    setAppAccessToken(token);
  }

  const modifiedConfig = { ...requestConfig };

  if (modifiedConfig.data instanceof FormData) {
    delete modifiedConfig.headers['Content-Type'];
  }

  return modifiedConfig;
});

axiosInstant.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config: originalRequest, response } = error;

    // EX: Handle 401 error
    if (response?.status === 401) {
      const refreshToken = authStore.refresh_token;

      // EX: Check if token is expired
      if (!refreshToken) {
        reloadApp();
        return Promise.reject(error);
      }

      // EX: Check if token is refreshing
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshResponse = await axios({
            ...originalRequest,
            method: 'post',
            url: '/auth/login',
            data: {
              refresh_token: refreshToken,
              grant_type: 'refresh_token',
            },
          });

          const newAccessToken = refreshResponse.data.payload;

          if (newAccessToken) {
            authStore.setAuth({
              ...authStore,
              access_token: newAccessToken,
            });
          }

          isRefreshing = false;

          setAppAccessToken(newAccessToken);

          // EX: Add callback to failedQueue for retry request and process it
          return await new Promise((resolve) => {
            addFailedQueue((newToken: string) => {
              originalRequest.headers.Authorization = createAuthToken(newToken);

              resolve(axiosInstant(originalRequest));
            });

            processFailedQueue(newAccessToken);
          });
        } catch {
          reloadApp();
          return Promise.reject(error);
        }
      }

      // EX: ONLY add callback to failedQueue for retry request
      return new Promise((resolve) => {
        addFailedQueue((newToken: string) => {
          originalRequest.headers.Authorization = createAuthToken(newToken);

          resolve(axiosInstant(originalRequest));
        });
      });
    }

    // EX: Handle other error
    return Promise.reject(error);
  },
);

const api = new Api({
  instance: axiosInstant,
});

const baseApi = api.api;

export { api, baseApi };
