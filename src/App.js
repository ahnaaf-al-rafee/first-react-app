import React from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css';

function App() {
  
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className=' container'>
        <Counters></Counters>
      </main>
   </React.Fragment>
  );
}

export default App;
