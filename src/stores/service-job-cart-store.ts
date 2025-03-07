import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { StoreNames } from './store-names';
import { ServiceJobCardItem } from '@/@types/extended.type';

interface ServiceJobCartStore {
  services: ServiceJobCardItem[];
  counter: number;
  addItem: () => void;
  deleteItem: (id: number) => void;
  updateItem: (id: number, updates: Partial<ServiceJobCardItem>) => void;
  reset: () => void;
}

export const useServiceJobCartStore = create<ServiceJobCartStore>((set) => ({
  services: [],
  counter: 1,
  addItem: () =>
    set((state) => ({
      services: [
        ...state.services,
        {
          id: state.counter,
          has_warranty: false,
          note: '',
          part_id: 0,
          service_id: 1,
          quantity: 1,
          unit: 'Time',
          unit_price: 0,
        },
      ],
      counter: state.counter + 1,
    })),
  deleteItem: (id: number) =>
    set((state) => ({
      services: state.services.filter((item) => item.id !== id),
    })),
  updateItem: (id: number, updates: Partial<ServiceJobCardItem>) =>
    set((state) => ({
      services: state.services.map((item) =>
        item.id === id ? { ...item, ...updates } : item,
      ),
    })),
  reset: () => set({ services: [], counter: 1 }),
}));

export const serviceJobCartStore = useServiceJobCartStore.getState();

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreNames.SERVICE_JOB_CART, useServiceJobCartStore);
}
