import React from 'react'
import './App.css';
import Profil from "./componentt/Profil"
import FullName from "./componentt/FullName"
import Adress from "./componentt/Adress"

function App() {
  return (
    <div className="App">
      <div className="lkol">
      <Profil/>
      <FullName/>
      <Adress/>
      </div>
      
    </div>
  );
}

export default App;
