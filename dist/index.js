"use strict";
// let age: number = 20;
var _a;
function getcustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getcustomer(1);
// Optional Chaining
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional Element Access Operator
// customer?.[0]
// Optional Call
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map