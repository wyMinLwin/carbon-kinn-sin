// import * as test from "./test";
import * as auth from "./auth";

class API {
	// test: typeof test;
	auth: typeof auth;

	constructor() {
		// this.test = test;
		this.auth = auth;
	}
}

const api = new API();

export default api;
