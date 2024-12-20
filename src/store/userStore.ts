// src/store/userStore.ts
import { UserAPI } from "@/http/api/auth/auth.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: UserAPI.User | null;
  setUser: (user: UserAPI.User) => void;
  updateUser: (updatedUser: Partial<UserAPI.User>) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (updatedUser) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user",
    },
  ),
);

export default useUserStore;
