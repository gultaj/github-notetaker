
export default class Store {
	static get(username) {
		const data = JSON.parse(localStorage.getItem(username)) || [];
		return data;
	};

	static set(username, obj) {
		localStorage.setItem(username, JSON.stringify(obj));
	}

}