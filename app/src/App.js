import React from 'react';
import CatForm from './components/CatForm';
import CatFact from './components/CatFact';
import cat from './assets/cat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={cat} alt="cat" style={{width: '50%', display: 'block'}}/>
      <div style={{width: '100%', backgroundColor: 'rgba(0,0,0,0.9)', color: 'white'}}>
      <h1 style={{margin: '0'}}>Cat Facts</h1>
      <CatForm />
      <CatFact />
      </div>
    </div>
  );
}

export default App;
