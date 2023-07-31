import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile.types'
type PrivatePros = {
    isLoggedIn:boolean,
    Component:React.ComponentType<ProfileProps>,
}
const Private = ({isLoggedIn, Component:Component}:PrivatePros) => {
   
    if(isLoggedIn){
        return <Component  name="Reda Hammada"/>
    }else{
        return <Login />
    }
  
}

export default Private