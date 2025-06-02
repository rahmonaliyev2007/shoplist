import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useGetGroupeData = create(
  persist(
    (set) => ({
      group: null,

      setGroup: (userData) => set({ user: userData }),

      clearGroup: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);
