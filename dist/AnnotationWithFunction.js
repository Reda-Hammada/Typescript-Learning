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
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 40, 50, +true));
//# sourceMappingURL=AnnotationWithFunction.js.map