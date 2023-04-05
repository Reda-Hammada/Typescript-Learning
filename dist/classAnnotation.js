"use strict";
class Employee {
    constructor(userName, salary) {
        this.u = userName;
        this.s = salary;
        this.userNameSalary = function () {
            return `Hello ${this.u} your salary is ${this.s}`;
        };
    }
    sayUserNameSalary() {
        return `Hello ${this.u} your salary is ${this.s}`;
    }
}
let userOne = new Employee('Reda', 8900);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.userNameSalary());
console.log(userOne.sayUserNameSalary());
//# sourceMappingURL=classAnnotation.js.map