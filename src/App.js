import React from 'react'
import './App.css';
import { useState } from 'react';


const App = () => {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handelClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className='app'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='container-fluid' id='outbox'>
            <div className='row' id='showdata'>
              <input className='col-xm-12' id='getNumber' type='text' value={input} readOnly />
              <div className='col-xm-12' id='Answer'> {`Ans : ${result}`} </div>
            </div>
            <div className='allBtn'>
              <div id="btn">
                <div className="row">
                  <button onClick={() => handelClick('C')} >C</button>
                  <button onClick={() => handelClick('%')}>%</button>
                  <button onClick={() => handelClick('^')}>^</button>
                  <button className='functionbtn' onClick={() => handelClick('/')}>/</button>
                </div>
                <div className="row">
                  <button onClick={() => handelClick('1')}>1</button>
                  <button onClick={() => handelClick('2')}>2</button>
                  <button onClick={() => handelClick('3')}>3</button>
                  <button className='functionbtn' onClick={() => handelClick('*')}>x</button>
                </div >
                <div className="row">
                  <button onClick={() => handelClick('4')}>4</button>
                  <button onClick={() => handelClick('5')}>5</button>
                  <button onClick={() => handelClick('6')}>6</button>
                  <button className='functionbtn' onClick={() => handelClick('-')}>-</button>
                </div>
                <div className="row">
                  <button onClick={() => handelClick('7')}>7</button>
                  <button onClick={() => handelClick('8')}>8</button>
                  <button onClick={() => handelClick('9')}>9</button>
                  <button className='functionbtn' onClick={() => handelClick('+')}>+</button>
                </div>
                <div className="row">
                  <button onClick={() => handelClick('00')}>00</button>
                  <button onClick={() => handelClick('0')}>0</button>
                  <button onClick={() => handelClick('.')}>.</button>
                  <button className='functionbtn' onClick={() => handelClick('=')}>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App