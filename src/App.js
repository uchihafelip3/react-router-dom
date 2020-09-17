import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     Home<br/>
     <Link to='/sobre'><button>Ir para a Sobre</button></Link>
    </div>
  );
}

export default App;
