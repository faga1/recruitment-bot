let CONTEXT_ROOT = "/apis";

export const env = process.env.NODE_ENV === "production" ? "prod" : "dev";

export const apis = {
	getUserInfoUrl: CONTEXT_ROOT + "/userinfo",
	addEmployee: CONTEXT_ROOT + "/employee/add",
	deleteEmployee: CONTEXT_ROOT + "/employee/delete",
	editEmployee: CONTEXT_ROOT + "/employee/editEmployee",
	getEmployee: CONTEXT_ROOT + "/employee/get",
};
