// store.js

import { create } from "zustand";

const useStore = create((set) => ({
  isDrawerOpen: false,
  isDesktopSize: true,
  setIsDrawerOpen: () =>
    set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  setIsDesktopSize: () => set({ isDesktopSize: window.innerWidth >= 990 }),
}));

export default useStore;
