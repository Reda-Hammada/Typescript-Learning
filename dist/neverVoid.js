"use strict";
function logging(msg) {
    console.log(msg);
}
console.log(logging('I am a message'));
const fail = (msg) => {
    throw new Error(msg);
    return;
};
const logMsg = (name) => {
    while (true) {
        console.log(name);
    }
};
//# sourceMappingURL=neverVoid.js.map