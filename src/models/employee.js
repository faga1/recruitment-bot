import request from "@/components/request";
import { apis } from "@/config";

export function getEmployeeList(params = {}) {
	return request
		.get(apis.getEmployee, { params })
		.then(res => {
			return res.data;
		})
		.catch(e => console.log(e));
}
