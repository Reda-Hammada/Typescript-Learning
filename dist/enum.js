"use strict";
var Kids;
(function (Kids) {
    Kids[Kids["five"] = 25] = "five";
    Kids[Kids["seven"] = 20] = "seven";
    Kids[Kids["ten"] = 15] = "ten";
})(Kids || (Kids = {}));
var level;
(function (level) {
    level[level["Insane"] = 0] = "Insane";
    level[level["kid"] = 15] = "kid";
    level[level["easy"] = 9] = "easy";
    level[level["medium"] = 9] = "medium";
    level[level["hard"] = getHardSeconds()] = "hard";
})(level || (level = {}));
let lvl = 'Easy';
if (lvl === "Easy") {
    console.log(`the level is ${lvl} and number of the seconds is ${level.easy}`);
}
function getHardSeconds() {
    return 3;
}
//# sourceMappingURL=enum.js.map