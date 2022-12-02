import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buttons = (props) => {
  return (

    <div className='btn'>
        <Button 
        variant="danger" 
        onClick={props.handleIncrementAttr}
        >Инкремент</Button>{' '}
        <Button 
        variant="success" 
        onClick={props.handleDecrementAttr}
        >Декремент</Button>{' '}
        <Button 
        variant="secondary" 
        onClick={props.handleResetAttr}
        >Сбросить</Button>{' '} 
    </div>
  )
}

export default Buttons

