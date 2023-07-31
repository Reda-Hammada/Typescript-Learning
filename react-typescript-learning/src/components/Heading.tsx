import React,{ReactNode}from 'react'

type headingProps = {
    children:ReactNode,
}
const Heading = (props:headingProps) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Heading