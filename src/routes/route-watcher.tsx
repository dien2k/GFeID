import { AppLoading } from '@/components/common/app-loading';
import { setAppAccessToken } from '@/services';
import AuthServices from '@/services/auth';
import {
  AppState,
  appStateStore,
  useAppStateStore,
} from '@/stores/app-state-store';
import { authStore, initialAuthData, useAuthStore } from '@/stores/auth-store';
import { profileStore, useProfileStore } from '@/stores/profile-store';
import { useRequest } from 'ahooks';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouteNames } from './routes';

interface RouteWatcherProps {
  children: React.ReactNode;
}

function RouteWatcher({ children }: RouteWatcherProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const appState = useAppStateStore((state) => state.appState);
  const token = useAuthStore((state) => state.access_token);
  const expiredAt = useAuthStore((state) => state.expired_at);
  const profile = useProfileStore((state) => state.profile);

  const isPublicRoute = [RouteNames.SIGN_IN, RouteNames.NOT_FOUND].includes(
    location.pathname as
      | typeof RouteNames.SIGN_IN
      | typeof RouteNames.NOT_FOUND,
  );
  const isTokenValid = token && expiredAt > new Date().getTime();

  const getUserInfo = useRequest(AuthServices.getUserInfo, {
    manual: true,
    onSuccess: (res) => {
      profileStore.setProfile({
        email: res.data.email,
        name: res.data.name,
        roles: res.data.roles,
        id: res.data.id,
      });
    },
    onError: (error) => {
      console.error('Failed to fetch user info:', error);
      handleAuthError();
    },
    onFinally: () => {
      appStateStore.setAppState(AppState.INITIALIZED);
    },
  });

  const handleAuthError = () => {
    authStore.setAuth(initialAuthData);
    profileStore.setProfile({
      email: '',
      name: '',
      roles: '',
      id: undefined,
    });

    redirectToLogin();
  };

  const redirectToLogin = () => {
    if (location.pathname !== RouteNames.SIGN_IN) {
      const searchParams = new URLSearchParams();
      if (location.pathname !== RouteNames.NOT_FOUND) {
        searchParams.append('redirect', location.pathname);
      }
      navigate(
        {
          pathname: RouteNames.SIGN_IN,
          search: searchParams.toString(),
        },
        { replace: true },
      );
    }
  };

  // Handle auth check and initialization
  useEffect(() => {
    if (isTokenValid) {
      setAppAccessToken(token);
      getUserInfo.run();
    } else if (!isPublicRoute) {
      handleAuthError();
    } else {
      appStateStore.setAppState(AppState.INITIALIZED);
    }
  }, [token, isPublicRoute, isTokenValid]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle redirect after successful auth
  useEffect(() => {
    if (profile.email && location.pathname === RouteNames.SIGN_IN) {
      const searchParams = new URLSearchParams(location.search);
      const redirectUrl = searchParams.get(
        'redirect',
      ) as keyof typeof RouteNames;
      navigate(redirectUrl || RouteNames.DASHBOARD, { replace: true });
    }
  }, [profile.email, location.pathname, location.search, navigate]);

  // TODO: Optionally - Handle token refresh warning
  useEffect(() => {
    if (token && expiredAt) {
      const timeUntilExpiry = expiredAt - new Date().getTime();
      const REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 minutes

      if (timeUntilExpiry > 0 && timeUntilExpiry < REFRESH_THRESHOLD) {
        console.warn('Token will expire soon');
      }
    }
  }, [token, expiredAt]);

  if (appState < AppState.INITIALIZED) {
    return <AppLoading className="h-screen w-screen" />;
  }

  return children;
}

export default RouteWatcher;
