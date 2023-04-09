"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('Cooking time for pizza is one hour');
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log('Cooking time for pizza is half hour');
    }
}
let pizzaOne = new Pizza('Awesome Pizza', 7);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
//# sourceMappingURL=AbstractClass.js.map