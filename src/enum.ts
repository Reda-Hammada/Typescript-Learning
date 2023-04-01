// Enum 

enum Kids {

    five = 25,
    seven = 20,
    ten = 15,
    
}

enum level {
    Insane,
    kid = Kids.ten,
    easy = 9 ,
    medium = easy,
    hard = getHardSeconds(),

}

let lvl:string = 'Easy'

if(lvl === "Easy"){
    console.log( `the level is ${lvl} and number of the seconds is ${level.easy}`);
}

function getHardSeconds(): number {
    
    return 3;
}