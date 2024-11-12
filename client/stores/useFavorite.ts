import { defineStore } from 'pinia'

export const favoriteStore = defineStore('favorite', {
	state: () => ({
		favorites: [] as string[],
	}),
	actions: {
		toggleFavorite(item: string) {
			if (this.isFavorite(item)) {
				this.removeFromFavorites(item)
			} else {
				this.addToFavorites(item)
			}
		},
		addToFavorites(item: string) {
			this.favorites.push(item)
		},
		removeFromFavorites(item: string) {
			this.favorites = this.favorites.filter((favorite) => favorite !== item)
		},
		removeAllFavorites() {
			this.favorites = []
		},
		showAlert(message: string) {
			alert(message)
		},
		isFavorite(item: string) {
			return this.favorites.includes(item)
		},
	},
})
