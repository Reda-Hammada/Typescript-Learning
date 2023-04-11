/**
 * Class
 *  Polymorphism & Method Override
 * 
 * 
 * Polymorphism 
 *   Classes have the same methods but different implementation
 * 
 * 
 * Method override  
 *   Allowing child class to provide implementaion of a method in Parent class
 *   A method in child class have same name as parent class
 */

class Player {
    constructor(public name:String){
    }
    attack():void{
        console.log('Attacking now')
    }
}


class Amazon extends Player {
    constructor(name:string, public spears:number){
        super(name)
    }
    attack() :void {
        super.attack();
        console.log('Attacking with Spears');
        this.spears -= 1;
    }
    
}
class Barbarian extends Player {
    constructor(name:string, public stones:number){
        super(name)
        super.attack();
        console.log('Attacking with stones');
        this.stones -= 1;
    }
}

let newAmazon = new Amazon('Ryan',6);
console.log(newAmazon);
newAmazon.attack()

let newBarbrian =  new Barbarian('Reda',10);
console.log(newBarbrian);
