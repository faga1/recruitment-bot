export function get(key) {
	return JSON.parse(sessionStorage.getItem(key));
}

export function set(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value));
}

export default {
	get(key) {
		return JSON.parse(sessionStorage.getItem(key));
	},
	set(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value));
	},
	remove(key) {
		return sessionStorage.removeItem(key);
	},
	clear() {
		sessionStorage.clear();
	},
};
