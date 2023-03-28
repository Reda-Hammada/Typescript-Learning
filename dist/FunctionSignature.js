"use strict";
const greet = (name, message) => {
    console.log(`${name} says ${message}`);
};
const caluculate = (a, b) => {
    return a + b;
};
const logDetails = (user, isUser) => {
    if (isUser === true) {
        console.log(`${user.name} is ${user.age}`);
    }
};
greet('reda', 'Hello');
caluculate(1, 5);
//# sourceMappingURL=FunctionSignature.js.map