export function uuid(len = 6, prefix = "") {
	return (
		prefix +
		Math.random()
			.toString(16)
			.slice(2, len + 2)
	);
}

export function safeJSONParse(value, defaultValue) {
	try {
		defaultValue = JSON.parse(value);
	} finally {
		return defaultValue;
	}
}

export function deferred() {
	const deferred = {};

	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});

	return deferred;
}
