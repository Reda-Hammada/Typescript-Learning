/**
 * Type annotation objects 
 * 
 * 
 */

let myObject :{
    userName : String,
    id: Number,
    hire?: Boolean,
    skills:{
        one: String,
        two:String,
    }
  
} = {
    userName:'Reda',
    id: 100,
    skills:{
        one:'Vue.js',
        two: 'Laravel',
    },
}

myObject.userName =  'RedaWebDeveloper'
myObject.id = 2;
myObject.hire = true;