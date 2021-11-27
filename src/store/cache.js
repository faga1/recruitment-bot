const cacheData = Object.create(null);

export default {
	get(key) {
		return cacheData[key];
	},
	set(key, value) {
		cacheData[key] = value;
	},
	has(key) {
		return key in cacheData;
	},
	delete(key) {
		delete cacheData[key];
	},
};
