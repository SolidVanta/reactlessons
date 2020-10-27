import React, { useState } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

const App = (props) => {

  const [countVals, setCount] = useState(
    {
      value: "Hello",
      count: 5,
    }
  );

  const countChangeHandler = (event) => {
    const value = event.target.value;
    const count = value.length;

    setCount({
      value: event.target.value,
      count: count,
    });

  }

  const deleteCharHandler = (index) =>{
    const valueCopy = [...countVals.value];
    valueCopy.splice(index, 1);
    console.log(valueCopy);
    console.log(index);

    setCount({
      value: valueCopy.join(''),
      count: countVals.count - 1,
    });
  }

  return (
    <div className="App">
      <input type="text" onChange={countChangeHandler} value={countVals.value}></input>
      <ValidationComponent count={countVals.count}></ValidationComponent>
      {countVals.value.split('').map( (v, index) => {
        console.log(index);
        return <CharComponent 
        ch={v} 
        click={ () => deleteCharHandler(index)}/>
       })}
    </div>
  );
}

export default App;
