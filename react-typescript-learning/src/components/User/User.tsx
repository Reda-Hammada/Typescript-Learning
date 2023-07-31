import React, {useState} from 'react'
import { AuthUser } from './User.types'

const User = () => {
    const [user,setUser] = useState<AuthUser | null>(null);

    const handleLogin = () =>{ 
       setUser({
        name:'Reda Hammada',
        email:'hammada.reda.dev@gmail.com',
        
       });
      }
    const handleLogout = () =>{ 
       setUser(null);
    }
  return (
   
    <div>
       <button onClick={handleLogin}>
          login 
       </button>
       <button onClick={handleLogout}>
          logout
       </button>
       <p>User name is {user?.name}</p>
       <p>User email is {user?.email}</p>
       
    </div>
  )
}

export default User