
//example 1

const greet = (name: string, message: string):void =>{

        console.log(`${name} says ${message}`);
};


// example 2

const caluculate = (a:number, b:number): number => {
    return a + b;
}


// example 3 

const logDetails = (user:{name:string, age:number},isUser: boolean):void =>{

    if(isUser === true){

        console.log(`${user.name} is ${user.age}`)

    }

}


// logDetails('reda',23 ,false)
greet('reda','Hello')
caluculate(1, 5);
