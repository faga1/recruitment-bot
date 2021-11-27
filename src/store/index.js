export default {
	get(key) {
		return JSON.parse(localStorage.getItem(key));
	},
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	remove(key) {
		return localStorage.removeItem(key);
	},
	clear() {
		localStorage.clear();
	},
};
