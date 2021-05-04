import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {incrementa} from './redux/action';

export function Book(props) {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <div> Nome: {props.nome}</div>
      <button onClick={() => {
        setCounter(counter + 1);
        dispatch(incrementa);
        }
        }>{counter}</button>
    </div>
  );
}
