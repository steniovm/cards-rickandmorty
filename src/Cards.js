import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
const URLCAPI = 'https://rickandmortyapi.com/api/character/';

function Cards(props) {
  console.log(URLCAPI)
  const [character, setCharacter] = useState(props);
    useEffect(() => {
      if(!character){
        console.log(URLCAPI+props.chid);
        setCharacter(props);
        console.log(character);
      }
    });
   
    return (
      <div id="card" className='Bodyapp'>
          <div id='imagebox'>
              <img id="picture" src={character.chimage} alt="imagem do personagem"/>
          </div>
          <div id="infos">
              ID: <label id="caracter_id">{character.chid}</label><br/>
              Nome: <label id="caracter_name">{character.chname}</label><br/>
              Status: <label id="caracter_status">{character.chstatus}</label><br/>
              Especie: <label id="caracter_species">{character.chspecies}</label><br/>
              Tipo: <label id="caracter_type">{character.chtype}</label><br/>
              Genero: <label id="caracter_gender">{character.chgender}</label><br/>
              Localização: <label id="caracter_location">{character.chlocation}</label><br/>
          </div>
          <div id="frontcolor" className={character.chstatus}>
              <div id="targe">
                {character.chstatus}
              </div>
          </div>
        </div>
    )
}

export default Cards;
