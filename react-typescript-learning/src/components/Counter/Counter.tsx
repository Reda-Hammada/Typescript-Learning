import React, {useReducer} from 'react';
import { CounterReducer } from './CounterReducer';
import { useEffect } from 'react';


const Counter = () => {
  useEffect(()=>{
    console.log('Rendered');
  })
  const {initialState, reducer} = CounterReducer;
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
    {state.count}
    <button onClick={()=>{
      dispatch({type:'increment', payload:1})
    }}>
      increment
    </button>
    <button onClick={()=>{
      dispatch({type:'decrement', payload:1});
    }}>
      decrement
    </button>
    <button onClick={()=>{
      dispatch({type:'multiply', payload:2});
    }}>
      Multiply
    </button>
    <button onClick={()=>{
      dispatch({type:'reset', payload:0});
    }}>
      Reset
    </button>

    
    </>
  )
}

export default Counter