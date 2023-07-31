/**
 * data types
 * union and intersection types
 * union type
 * the | symbole is used to create the Union => "Or"
 */



// unions

let variable : Number | string;

variable = '5';
variable = 5;


// insertions 
type A = {
    one: String,
    two: Number,
    three: Boolean,

}

type B  =  A & {
    four: Number,
}

type c = {
    five: boolean, 
}

type mix = A & c;

function getActions(btns: mix): void
{
 console.log(`Hello ${btns.one}`);
 console.log(`Hello ${btns.two}`);
 console.log(`Hello ${btns.three}`);
 console.log(`Hello ${btns.five}`);

}
getActions({one: 'String', two: 100, three: true, five:true});