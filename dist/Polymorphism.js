"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log('Attacking now');
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log('Attacking with Spears');
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, stones) {
        super(name);
        this.stones = stones;
        super.attack();
        console.log('Attacking with stones');
        this.stones -= 1;
    }
}
let newAmazon = new Amazon('Ryan', 6);
console.log(newAmazon);
newAmazon.attack();
let newBarbrian = new Barbarian('Reda', 10);
console.log(newBarbrian);
//# sourceMappingURL=Polymorphism.js.map