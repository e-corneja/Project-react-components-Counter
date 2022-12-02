import React from 'react';
import { useState } from 'react';
import Buttons from './Buttons';
import MainContent from './MainContent';

const Main = () => {
let [ number, setNumber ] = useState(0);

const handleIncrementFunc = () => {
  setNumber(number + 1);
}

const handleDecrementFunc = () => {
  setNumber(number - 1);
}

const handleResetFunc = () => {
  setNumber(0);
}

  return (
    <div className='main'>
        <MainContent number={number}/>
        <Buttons 
        handleIncrementAttr={handleIncrementFunc}
        handleDecrementAttr={handleDecrementFunc}
        handleResetAttr={handleResetFunc}
        />
    </div>
  )
}

export default Main