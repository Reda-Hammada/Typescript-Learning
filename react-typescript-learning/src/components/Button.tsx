import React from 'react'

type ButtonProps = {
    handleClick : () => void
}
const Button = (props:ButtonProps) => {
    const {handleClick} = props;
    
     return <button onClick={handleClick}>Click Me</button>
}

export default Button