import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { List } from './components/List';
import { Loader } from './components/Loader';
import { getNumber } from './api';


function App() {
  const [boolean, setBoolean] = useState(false);
  console.log(getNumber());

  const getNum = async() => {
    await getNumber()
    await setBoolean(true);
  }
  getNum()

  return (
    <div className="App">
      <Header />
      {boolean
        ? <List />
        : <Loader />
      }
    </div>
  );
}

export default App;
