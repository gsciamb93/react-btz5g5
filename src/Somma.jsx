import React from 'react';
import {useSelector} from 'react-redux';
import {getSomma} from './redux/selector';

export function Somma(props)
{
  const sommaDeiClick = useSelector(getSomma);
  return <div>La somma dei click è: {sommaDeiClick}</div>
}