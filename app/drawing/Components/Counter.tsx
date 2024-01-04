"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Count,
  decrement,
  increment,
  incrementByAmount,
  reset
} from '../store/CounterSlice';
import styles from '../Components/Counter.module.css';

export function Counter() {
  const {counter}: any = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(counter)
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={`${styles.textbox} text-black `}
          
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          className={styles.button}
          onClick={() =>
            dispatch(reset())
          }
        >
          Reset
        </button>
        
      </div>
    </div>
  );
}