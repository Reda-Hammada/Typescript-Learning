import {CounterAction,CounterState} from './Counter.types';

const initialState = {count: 0}

const reducer = (state:CounterState,action:CounterAction) => {

    switch(action.type){
        case'increment':
         return {count : state.count + action.payload};

        case 'decrement':
         return {count: state.count - action.payload};
            
        case 'multiply':
            return {count: state.count *  action.payload};

        case 'reset':
              return {count:0};
        default:
            return state;
    }

}


export const CounterReducer = {
    initialState,
    reducer,
}

