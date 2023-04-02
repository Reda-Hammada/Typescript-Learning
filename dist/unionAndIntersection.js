"use strict";
let variable;
variable = '5';
variable = 5;
function getActions(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions({ one: 'String', two: 100, three: true, five: true });
//# sourceMappingURL=unionAndIntersection.js.map