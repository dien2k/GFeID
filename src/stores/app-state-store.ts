import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { StoreNames } from './store-names';

export enum AppState {
  IDLE,
  LOADING,
  INITIALIZED,
}

interface AppStateStore {
  appState: AppState;
  setAppState: (appState: AppState) => void;
}

export const useAppStateStore = create<AppStateStore>((set) => ({
  appState: AppState.IDLE,
  setAppState: (appState: AppState) => set({ appState }),
}));

export const appStateStore = useAppStateStore.getState();

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreNames.APP_STATE_STORE, useAppStateStore);
}
