import { create } from "zustand";

interface Store {
  open: boolean;
  toggleOpen: () => void;
}

export const navStore = create<Store>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
