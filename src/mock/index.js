// import { axiosInstance } from "@/components/request";
// import MockAdapter from "axios-mock-adapter";
// import { apis } from "@/config";

// const mock = new MockAdapter(axiosInstance);
// const data = [
// 	{
// 		id: "1",
// 		name: "John Brown",
// 		age: 32,
// 		city: "New York",
// 		address: "New York No. 1 Lake Park",
// 	},
// 	{
// 		id: "2",
// 		name: "Jim Green",
// 		age: 42,
// 		city: "London",
// 		address: "London No. 1 Lake Park",
// 	},
// 	{
// 		id: "3",
// 		name: "Joe Black",
// 		age: 32,
// 		city: "Skeyney",
// 		address: "Skeyney No. 1 Lake Park",
// 	},
// 	{
// 		id: "4",
// 		name: "Mike Wu",
// 		age: 27,
// 		city: "Shenzhen",
// 		address: "ShenZhen No. 1 Lake Park",
// 	},
// 	{
// 		id: "5",
// 		name: "Jason Zheng",
// 		age: 30,
// 		city: "Guangzhou",
// 		address: "Guangzhou No. 1 Lake Park",
// 	},
// 	{
// 		id: "6",
// 		name: "Rose Zhao",
// 		age: 20,
// 		city: "Shanghai",
// 		address: "Shanghai No. 1 Lake Park",
// 	},
// 	{
// 		id: "7",
// 		name: "Nobo Zhou",
// 		age: 20,
// 		city: "Beijing",
// 		address: "Beijing No. 1 Lake Park",
// 	},
// 	{
// 		id: "9",
// 		name: "Nick Mo",
// 		age: 20,
// 		city: "Hongkong",
// 		address: "Hongkong No. 1 Lake Park",
// 	},
// ];

// mock.onGet(apis.getEmployee).reply(function(config) {
//     const { keywords } = config.params;
//     console.log(data)
// 	return [
// 		200,
// 		{
// 			data: !keywords
// 				? data
// 				: data.filter(item =>
// 						[item.name, item.age, item.city, item.address].some(v =>
// 							String(v).includes(keywords)
// 						)
// 				  ),
// 			status: 0,
// 		},
// 	];
// });

// mock.onPost(apis.deleteEmployee).reply(function(config) {
// 	const params = JSON.parse(config.data);
// 	const index = data.findIndex(item => item.id == params.id);
// 	if (index > -1) {
// 		data.splice(index, 1);
// 	}
// 	return [
// 		200,
// 		{
// 			data: true,
// 			status: 0,
// 		},
// 	];
// });

// mock.onPost(apis.addEmployee).reply(function(config) {
// 	const params = JSON.parse(config.data);
// 	data.push(params);

// 	return [
// 		200,
// 		{
// 			data: true,
// 			status: 0,
// 		},
// 	];
// });

// mock.onPost(apis.editEmployee).reply(function(config) {
// 	const params = JSON.parse(config.data);
// 	const index = data.findIndex(item => item.id == params.id);
// 	if (index > -1) {
// 		data[index] = params;
// 	}

// 	return [
// 		200,
// 		{
// 			data: true,
// 			status: 0,
// 		},
// 	];
// });
