import React,{ReactNode} from 'react'

type definitionProps = {
    children :ReactNode,
}

const Definition = (props:definitionProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Definition