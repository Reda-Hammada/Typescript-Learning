import React from 'react'

type GreetProps = {
    name:String,
    age:Number,
    profession:String,
}

const Greet = (props : GreetProps) => {
    const {name,age,profession} = props;
  return (
    <div>{` Hello,I am ${name} a ${age} years old ${profession} `}</div>
  )
}

export default Greet;