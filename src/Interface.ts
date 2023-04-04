/**
 * Interface
 *  Serve like Types
 *  The interface describes the shape of an Object
 *  It defines syntax to follow 
 *  use with object
 *  use with function 
 *  use read only and optional operator
 *  Reopen the interface and use cases
 * 
 */

interface User { 
    id : number,
    username : string,
    country ?: string,
    sayHello: () => string,
    sayWelcome(): void,
    getDouble(num: number): number,
     

}

let user: User = {
  id: 100,
  username: 'reda',
  country: 'Morocco',
  sayHello(){
    return `Hello ${this.username}` 
  }, 
  sayWelcome(){
    console.log(`Welcome ${this.username}`)
  },
  getDouble(n){
    return n * 2;
  }
}

console.log(user);

function getData(data :User)
{
     console.log(`Id is ${data.id}`)
     console.log(`Username is ${data.username}`)
     console.log(`Country is ${data.country}`)
}

// getData({id: 100, username:'Reda'});

console.log(user.id);
console.log(user.sayHello());
user.sayWelcome()
console.log(user.getDouble(user.id));

// reopen interface 

// Homepage 
interface settings {
  theme: boolean,
  font: string,
}
// articles page 
interface settings {
  sidebar:boolean,
}
// contact page 
interface settings {
   external?: boolean;

}

let userSettings: settings = {
  theme:true,
  font: 'Open sans',
  sidebar:false,
}