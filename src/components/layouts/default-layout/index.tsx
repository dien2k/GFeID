import { AppLoading } from '@/components/common/app-loading';
import LanguageSwitcher from '@/components/common/language-switcher';
import { RouteNames } from '@/routes/routes';
import { AppState, useAppStateStore } from '@/stores/app-state-store';
import { authStore, initialAuthData } from '@/stores/auth-store';
import { profileStore, useProfileStore } from '@/stores/profile-store';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Image, Layout } from 'antd';
import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from './admin-sidebar';
// import { ThemeToggle } from '@/components/common/theme-toggle';

const { Header, Sider, Content } = Layout;

const DefaultAdminLayout = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const profile = useProfileStore((state) => state.profile);
  const appState = useAppStateStore((state) => state.appState);

  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    authStore.setAuth(initialAuthData);

    profileStore.setProfile({});
    navigate(RouteNames.SIGN_IN);
  };

  useEffect(() => {
    if (appState === AppState.INITIALIZED && !profile.email) {
      const redirectPath =
        location.pathname !== RouteNames.NOT_FOUND
          ? `?redirect=${location.pathname}`
          : '';
      navigate(`${RouteNames.SIGN_IN}${redirectPath}`);
    }
  }, [profile]); // eslint-disable-line react-hooks/exhaustive-deps

  if (appState < AppState.INITIALIZED || !profile.email) {
    return <AppLoading className="h-screen w-screen" />;
  }

  return (
    <Layout className="max-h-screen">
      <Sider
        width={collapsed ? '5rem' : '18rem'}
        className="fixed bottom-0 left-0 top-0 h-screen overflow-auto"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="flex justify-center py-1">
          <Image
            height={48}
            className="rounded-full"
            src="/logo.png"
            preview={false}
          />
        </div>
        <AdminSidebar />
      </Sider>
      <Layout
        className={`${collapsed ? 'ml-[5rem]' : 'ml-[18rem]'} transition-margin duration-200`}
      >
        <Header
          className={`fixed right-0 top-0 z-10 flex items-center justify-between border-b border-gray-400 px-4 ${collapsed ? 'w-[calc(100vw-5rem)]' : 'w-[calc(100vw-18rem)]'} transition-width duration-200`}
        >
          <Button
            type="text"
            size="large"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div>
            <LanguageSwitcher />
            <Button
              type="text"
              size="large"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            >
              {t('Logout')}
            </Button>
          </div>
          {/* <ThemeToggle /> */}
        </Header>
        <Content className="custom-scrollbar relative mt-16 h-screen overflow-y-auto p-6">
          <Suspense fallback={<AppLoading className="h-screen w-screen" />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultAdminLayout;
