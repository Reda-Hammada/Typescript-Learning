"use strict";
class Employee {
    constructor(userName, salary) {
        this.userName = userName;
        this.salary = salary;
        this.userName = userName;
        this.salary = salary;
        Employee.created++;
        Employee.getCount();
        this.userNameSalary = function () {
            return `Hello ${this.userName} your salary is ${this.salary}`;
        };
    }
    static getCount() {
        console.log(`${this.created} objects created`);
    }
    sayUserNameSalary() {
        return `Hello ${this.userName} your salary is ${this.salary}`;
    }
}
Employee.created = 0;
let userOne = new Employee('Reda', 8900);
console.log(userOne.userNameSalary());
console.log(userOne.sayUserNameSalary());
class Page {
    constructor(theme) {
        this.theme = theme;
        this.theme = theme;
        this.save();
    }
    save() {
        console.log(`Created ${this.theme}`);
    }
}
const newPage = new Page(true);
//# sourceMappingURL=classAnnotation.js.map