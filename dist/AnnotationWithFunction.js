"use strict";
const showDetails = (name, age, salary) => {
    return `Hello ${name}, Age is ${age}, salary is`;
};
console.log(showDetails('reda', 22, 9100));
const person = (name = 'person', age) => {
    return `${name} . ${age}`;
};
console.log(person(undefined, 22));
const student = (name, branch) => {
    return `${name} . ${branch}`;
};
console.log(student('reda'));
//# sourceMappingURL=AnnotationWithFunction.js.map