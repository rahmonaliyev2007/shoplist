import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useAuthMe = create(
  persist(
    (set) => ({
      authMe: null,
      setAuthMe: (userData) => set({ user: userData }),

      clearAuthMe: () => set({ user: null }),
    }),
    {
      
      name: 'auth-me',
    }
  )
);
