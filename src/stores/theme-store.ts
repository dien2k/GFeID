import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../themes';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { StoreNames } from './store-names';

interface ThemeStore {
  isDarkMode: boolean;

  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: false,

      toggleTheme: () =>
        set((state) => ({
          isDarkMode: !state.isDarkMode,
        })),
      setTheme: (theme: Theme) => set({ isDarkMode: theme === Theme.DARK }),
    }),
    {
      name: StoreNames.THEME_STORE,
    },
  ),
);

export const themeStore = useThemeStore.getState();

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreNames.THEME_STORE, useThemeStore);
}
