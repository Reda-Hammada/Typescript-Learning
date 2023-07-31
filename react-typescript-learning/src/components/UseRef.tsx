import React,{useRef,useState}from 'react'

const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)
    const [inputValue,setInputValue] = useState('');


  return (
    <div>
        <h2>useRef</h2>
        <p>Ref Value : {inputValue}</p>
        <input type='text' 
               ref={inputRef} 
               onChange={()=>{
               setInputValue(inputRef.current.value)}} 
               />
        
    </div>
  )
}

export default UseRef