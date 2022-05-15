import React from 'react';
import foto from './assets/stenio.jpg';
import './App.css';

function Headerapp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="myimg" alt="Minha Foto" />
        <div className="divinfo">
          <span id="myname">Nome: Stênio</span>
          <span id="myhome">Local: Belo Horizonte / MG</span>
          <span id="instui">Instituto Alpha Lumen</span>
          <span id="curso">Curso de Desenvolvimento FullStack - AlphaEdtech</span>
        </div>
      </header>
    </div>
  );
}

export default Headerapp;
