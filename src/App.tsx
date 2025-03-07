import AppRouter from '@/routes/app-router';
import { useThemeStore } from '@/stores/theme-store';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import './i18n';
import './index.css';
import { darkTheme, lightTheme } from './themes';

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
