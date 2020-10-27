import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const  App = (props) => {
  const [inputState, setInputState] = useState ({
    credentials: [
      {username: 'PowercutMoodie', password: 'Enter Password'}
    ]
  })

  const usernameChangeHandler = (event) => {
    console.log(inputState);
    // console.log(setInputState);

    setInputState(
      {
        credentials: [
          {username: event.target.value, password: 'Enter Password'}
        ]
      }
    )
  }
  
 

  return (
    <div className="App">
      <UserOutput username={inputState.credentials[0].username}/>
      <UserInput username={inputState.credentials[0].username} changed={usernameChangeHandler}/>
    </div>
  );
}

export default App;
