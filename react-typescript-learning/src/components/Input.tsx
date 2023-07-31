import React from 'react'

type inputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
const Input = (props:inputProps) => {
    const {handleChange} = props;

  return (
    <div>
        <input type='text' 
               onChange={handleChange}/>
               
    </div>
  )
}

export default Input