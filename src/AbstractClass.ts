/**
 * Abstract class and Members
 *  we cannot create an instance of an Abstract class 
 * 
 */


abstract class Food {
    constructor(public title: string){}

           abstract getCookingTime(): void 
        
    
}

class Pizza extends Food{
    
    constructor(title:string , public price:number){
            super(title);
    }
    getCookingTime(): void {
        console.log('Cooking time for pizza is one hour')
    }
}

class Burger extends Food{
    constructor(title:string, public price:number){
        super(title);

    }
    getCookingTime(): void {
        console.log('Cooking time for pizza is half hour')

    }
}

let pizzaOne = new Pizza('Awesome Pizza',7);

console.log(pizzaOne.title)
console.log(pizzaOne.price);
pizzaOne.getCookingTime()

