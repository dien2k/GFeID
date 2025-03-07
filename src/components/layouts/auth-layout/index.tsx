import { useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { AppLoading } from '@/components/common/app-loading';
import { RouteNames } from '@/routes/routes';
import { AppState, useAppStateStore } from '@/stores/app-state-store';
import { useProfileStore } from '@/stores/profile-store';

function AuthLayout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const profile = useProfileStore((state) => state.profile);
  const appState = useAppStateStore((state) => state.appState);

  useEffect(() => {
    if (profile.email) {
      const redirectUrl = searchParams.get('redirect');
      navigate(redirectUrl || RouteNames.DASHBOARD);
    }
  }, [profile]); // eslint-disable-line react-hooks/exhaustive-deps

  if (appState < AppState.INITIALIZED || profile.email) {
    return <AppLoading className="h-screen w-screen" />;
  }

  return <Outlet />;
}

export default AuthLayout;
