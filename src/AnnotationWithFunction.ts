
const showDetails = (name:string, age:number, salary:number ) => {

   return `Hello ${name}, Age is ${age}, salary is`;
}

console.log(showDetails('reda',22,9100));

//// function default parameter 

const person =(name:string = 'person', age: number)=> {

   return `${name} . ${age}`;

}

console.log(person(undefined,22));

// function optional parameter

const student =(name:string, branch?:string)=> {
 
   return `${name} . ${branch}`;

}

console.log(student('reda'));
