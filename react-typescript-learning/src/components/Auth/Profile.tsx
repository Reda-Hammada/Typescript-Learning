import React from 'react'
import { ProfileProps } from './Profile.types'

const Profile = (props:ProfileProps) => {
  return (
    <div>{props.name} Profile</div>
  )
}

export default Profile