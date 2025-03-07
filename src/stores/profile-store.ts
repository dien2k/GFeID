import { create } from "zustand";
import { EntitiesAdminUserProfile } from "@/@types/api.type";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { StoreNames } from "./store-names";

interface ProfileStore {
  profile: EntitiesAdminUserProfile;
  setProfile: (profile: EntitiesAdminUserProfile) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: {},
  setProfile: (profile: EntitiesAdminUserProfile) => set({ profile }),
}));

export const profileStore = useProfileStore.getState();

if (import.meta.env.DEV) {
  mountStoreDevtool(StoreNames.PROFILE_STORE, useProfileStore);
}
