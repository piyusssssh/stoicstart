import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

const Counter = ()=>{

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();


    return(
        <div style={counterStyle}>
        <h2>Redux Counter</h2>
        <p>count: {count}</p>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
    );
}

const counterStyle = {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
}

export default Counter;