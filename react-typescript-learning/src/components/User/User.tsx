import React, {useState} from 'react'
import { AuthUser } from './User.types'

const User = () => {
    const [user,setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () =>{ 
       setUser({
        name:'Reda Hammada',
        email:'hammada.reda.dev@gmail.com',
         });
      }
  return (
   
    <div>
       <button onClick={handleLogin}>
          login 
       </button>
       <p>User name is {user.name}</p>
       <p>User email is {user.email}</p>
       
    </div>
  )
}

export default User