"use strict";
let user = {
    id: 100,
    username: 'reda',
    country: 'Morocco',
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome() {
        console.log(`Welcome ${this.username}`);
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user);
function getData(data) {
    console.log(`Id is ${data.id}`);
    console.log(`Username is ${data.username}`);
    console.log(`Country is ${data.country}`);
}
console.log(user.id);
console.log(user.sayHello());
user.sayWelcome();
console.log(user.getDouble(user.id));
//# sourceMappingURL=Interface.js.map