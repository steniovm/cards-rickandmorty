import React from 'react';
import './App.css';

function Filters() {
  return (
    <div className="Bodyapp">
      Nome
      <select id="name" placeholder='Nome'></select>
      Status
      <select id="status" placeholder='Status'></select>
      Especie
      <select id="species" placeholder='Especie'></select>
      Tipo
      <select id="type" placeholder='Tipo'></select>
      Genero
      <select id="gender" placeholder='Genero'></select>
      Localização
      <select id="Location" placeholder='Localização'></select>
      Epsodio
      <select id="Episode" placeholder='episodio'></select>
      <button>Aplicar</button>
    </div>
  );
}

export default Filters;
