import { Switch } from 'antd';
import { themeStore, useThemeStore } from '@/stores/theme-store';
import { Theme } from '@/themes';
import { SunFilled, MoonFilled } from '@ant-design/icons';
export const ThemeToggle: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  const handleToggleTheme = (isDarkMode: boolean) => {
    themeStore.setTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleToggleTheme}
      checkedChildren={<MoonFilled className="text-white" />}
      unCheckedChildren={<SunFilled className="text-orange-500" />}
    />
  );
};
