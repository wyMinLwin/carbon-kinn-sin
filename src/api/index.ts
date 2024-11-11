// import * as test from "./test";
import * as auth from "./auth";
import * as report from "./report";
import * as contactUs from "./contact-us";
import * as profile from "./profile"
import * as collect from "./collect"

class API {
	// test: typeof test;
	auth: typeof auth;
	report: typeof report;
	contactUs: typeof contactUs;
	profile: typeof profile
	collect: typeof collect

	constructor() {
		// this.test = test;
		this.auth = auth;
		this.report = report;
		this.contactUs = contactUs;
		this.profile = profile
		this.collect = collect
	}
}

const api = new API();

export default api;
