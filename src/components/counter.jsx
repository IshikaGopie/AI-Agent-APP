import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../state/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Counter: {count}</h1>

            <div style={{ margin: '1rem' }}>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                    style={{ width: '60px', marginRight: '0.5rem' }}
                />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
                    Add Amount
                </button>
            </div>
        </div>
    );
};

export default Counter;
