import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTheme = create(
	persist(
		(set, get) => ({
			isDark: false,

			toggleTheme: () => {
				const newTheme = !get().isDark
				document.documentElement.classList.toggle('dark', newTheme)
				set({ isDark: newTheme })
			},

			init: () => {
				const isDarkStored = get().isDark
				document.documentElement.classList.toggle('dark', isDarkStored)
			},
		}),
		{
			name: 'theme-storage',

			onRehydrateStorage: () => state => {
				if (state) {
					document.documentElement.classList.toggle('dark', state.isDark)
				}
			},
		}
	)
)
