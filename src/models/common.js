import request from "@/components/request";
import { apis } from "@/config";

import avatar from "@/assets/images/avatar.jpg";

export function getUserInfo() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				empCode: 1000,
				avatar: avatar,
				username: "noob.zhou",
			});
		}, 200);
	});
}
