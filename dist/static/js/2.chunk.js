(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/request */ "./src/components/request/index.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios-mock-adapter */ "./node_modules/axios-mock-adapter/src/index.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios_mock_adapter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config */ "./src/config/index.js");










var mock = new axios_mock_adapter__WEBPACK_IMPORTED_MODULE_8___default.a(_components_request__WEBPACK_IMPORTED_MODULE_7__["axiosInstance"]);
var data = [{
  id: "1",
  name: "John Brown",
  age: 32,
  city: "New York",
  address: "New York No. 1 Lake Park"
}, {
  id: "2",
  name: "Jim Green",
  age: 42,
  city: "London",
  address: "London No. 1 Lake Park"
}, {
  id: "3",
  name: "Joe Black",
  age: 32,
  city: "Skeyney",
  address: "Skeyney No. 1 Lake Park"
}, {
  id: "4",
  name: "Mike Wu",
  age: 27,
  city: "Shenzhen",
  address: "ShenZhen No. 1 Lake Park"
}, {
  id: "5",
  name: "Jason Zheng",
  age: 30,
  city: "Guangzhou",
  address: "Guangzhou No. 1 Lake Park"
}, {
  id: "6",
  name: "Rose Zhao",
  age: 20,
  city: "Shanghai",
  address: "Shanghai No. 1 Lake Park"
}, {
  id: "7",
  name: "Nobo Zhou",
  age: 20,
  city: "Beijing",
  address: "Beijing No. 1 Lake Park"
}, {
  id: "9",
  name: "Nick Mo",
  age: 20,
  city: "Hongkong",
  address: "Hongkong No. 1 Lake Park"
}];
mock.onGet(_config__WEBPACK_IMPORTED_MODULE_9__["apis"].getEmployee).reply(function (config) {
  var keywords = config.params.keywords;
  console.log(data);
  return [200, {
    data: !keywords ? data : data.filter(function (item) {
      return [item.name, item.age, item.city, item.address].some(function (v) {
        return String(v).includes(keywords);
      });
    }),
    status: 0
  }];
});
mock.onPost(_config__WEBPACK_IMPORTED_MODULE_9__["apis"].deleteEmployee).reply(function (config) {
  var params = JSON.parse(config.data);
  var index = data.findIndex(function (item) {
    return item.id == params.id;
  });

  if (index > -1) {
    data.splice(index, 1);
  }

  return [200, {
    data: true,
    status: 0
  }];
});
mock.onPost(_config__WEBPACK_IMPORTED_MODULE_9__["apis"].addEmployee).reply(function (config) {
  var params = JSON.parse(config.data);
  data.push(params);
  return [200, {
    data: true,
    status: 0
  }];
});
mock.onPost(_config__WEBPACK_IMPORTED_MODULE_9__["apis"].editEmployee).reply(function (config) {
  var params = JSON.parse(config.data);
  var index = data.findIndex(function (item) {
    return item.id == params.id;
  });

  if (index > -1) {
    data[index] = params;
  }

  return [200, {
    data: true,
    status: 0
  }];
});

/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map