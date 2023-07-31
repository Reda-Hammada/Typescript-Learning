export type CounterState = {
    count:number,
};

export type CounterAction = {
    type:'increment' | 'decrement' |'reset' | 'multiply'
    payload:number,
}

