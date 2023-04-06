/**
 * Class
 * Type Annotations with Class 
 *  data access modifiers parameters properties 
 * 
 * Public 
 *   All members of a class in typescript are public 
 *   All public members can accessed anywhere  
 * 
 * Private 
 *     Members are visible only to that class and are not accessible outside the class
 * 
 * Protected 
 *    Same like Private but can be accessed using the deriving class 
 *   
 * Typescript is a layer on Top of Javascript 
 *  It should remove all the annotations and the access modifiers .
 *  
 * Static members
 * 
 * Implement interface to class 
 *
*/

class Employee  {

  static created: number = 0;

  static getCount(): void {
    console.log(`${this.created} objects created`);
  }

  public userNameSalary:() =>  string;

    constructor(private userName: string, private salary: number){

        this.userName = userName;
        this.salary = salary;
        Employee.created++;
        Employee.getCount();
        this.userNameSalary = function(){

            return `Hello ${this.userName} your salary is ${this.salary}`
        }
    }
   public sayUserNameSalary(): string {

        return `Hello ${this.userName} your salary is ${this.salary}`

    }
}

let userOne = new Employee('Reda',8900)

console.log(userOne.userNameSalary());
console.log(userOne.sayUserNameSalary());

// Interface 

interface Settings {
    theme:boolean,
    font?:string,
    save():void;
}


class Page implements Settings{

    constructor(public theme: boolean) {
      this.theme = theme;
      this.save();
    }

    save():void {
        console.log(`Created ${this.theme}`)
    } 
}

const newPage = new Page(true);
