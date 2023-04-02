"use strict";
let user = {
    id: 100,
    username: 'reda',
    country: 'Morocco',
};
console.log(user);
function getData(data) {
    console.log(`Id is ${data.id}`);
    console.log(`Username is ${data.username}`);
    console.log(`Country is ${data.country}`);
}
getData({ id: 100, username: 'Reda' });
//# sourceMappingURL=Interface.js.map