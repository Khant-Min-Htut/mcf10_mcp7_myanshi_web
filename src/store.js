// store.js

import { tr } from "framer-motion/client";
import { create } from "zustand";

const useStore = create((set) => ({
  isDrawerOpen: false,
  isDesktopSize: true,
  isAddBtnOpen: false,
  isEditBtnOpen: false,
  isDeleteBtnOpen: true,
  setIsDrawerOpen: () =>
    set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  setIsDesktopSize: () => set({ isDesktopSize: window.innerWidth >= 990 }),
  setIsAddBtnOpen: () =>
    set((state) => ({ isAddBtnOpen: !state.isAddBtnOpen })),
  setIsEditBtnOpen: () =>
    set((state) => ({ isEditBtnOpen: !state.isEditBtnOpen })),
  setIsDeleteBtnOpen: () =>
    set((state) => ({ isDeleteBtnOpen: !state.isDeleteBtnOpen })),
}));

export default useStore;
