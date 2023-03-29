//void:
// void: your function does return any value "undefined"
function logging(msg: string):void
{
    console.log(msg);
 
}

console.log(logging('I am a message'))
// never 
// never it means never return because it is unreachable code and it blocks the code execution context 

const fail = (msg: string) => {

    throw new Error(msg);
    return;
}

const logMsg = (name: string):never =>{
    
    while(true){
        console.log(name);
    }
    
}