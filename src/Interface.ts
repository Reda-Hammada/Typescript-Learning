/**
 * Interface
 *  Serve like Types
 *  The interface describes the shape of an Object
 *  It defines syntax to follow 
 *  use with object
 *  use with function 
 *  use read only and optional operator
 * 
 */

interface User { 
    id : number,
    username : string,
    country ?: string,

}

let user: User = {
  id: 100,
  username: 'reda',
  country: 'Morocco',
}

console.log(user);

function getData(data :User)
{
     console.log(`Id is ${data.id}`)
     console.log(`Username is ${data.username}`)
     console.log(`Country is ${data.country}`)
}

getData({id: 100, username:'Reda'});