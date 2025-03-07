import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { StoreNames } from './store-names';

interface AuthData {
  access_token: string;
  refresh_token: string;
  expired_at: number;
  email: string;
}

export const initialAuthData: AuthData = {
  access_token: '',
  refresh_token: '',
  expired_at: 0,
  email: '',
};

interface AuthStore extends AuthData {
  setAuth: (auth: AuthData) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialAuthData,

      setAuth: (auth: AuthData) => set(auth),
    }),
    {
      name: StoreNames.AUTH_STORE,
    },
  ),
);

export const authStore = useAuthStore.getState();

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreNames.AUTH_STORE, useAuthStore);
}
