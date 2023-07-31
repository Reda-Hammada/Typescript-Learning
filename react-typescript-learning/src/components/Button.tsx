import React from 'react'

type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>,id:Number) => void
}
const Button = (props:ButtonProps) => {
    const {handleClick} = props;

     return <button onClick={(event)=>handleClick(event,23)}>Click Me</button>
}

export default Button