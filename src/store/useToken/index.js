import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: localStorage.getItem('accessToken') || null,

  setToken: (token) => {
    localStorage.setItem('accessToken', token);
    set({ token });
  },

  clearToken: () => {
    localStorage.removeItem('accessToken');
    set({ token: null });
  },
}));
