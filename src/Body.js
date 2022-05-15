import React from 'react';
import { useEffect, useState } from 'react';
//import Filters from './Filters';
import Cards from './Cards';
import './App.css';
const URLAPI = 'https://rickandmortyapi.com/api/';

function Bodyapp() {
    let listn = [];
    let listc = [];
    const [ncharacter, setNcharacter] = useState();
    const [listcards, setListcards] = useState();
    const [allcharacters, setAllcharacters] = useState();
    const [nlocation, setNlocation] = useState();
    const [nepisode, setNepisode] = useState();
    const [listcharacter, setListcharacter] = useState();
    const [listlocation, setListlocation] = useState();
    const [listepisode, setListepisode] = useState();
    useEffect(() => {
      if(!ncharacter)
      fetch(URLAPI+'character').then((res) => res.json()).then((data) => {
        setNcharacter(data.info.count);
        setAllcharacters(data.results);
        for(let i=0; i<data.results.length; i++){
          listn.push(<Cards
            chid={data.results[i].id}
            chname={data.results[i].name}
            chstatus={data.results[i].status}
            chspecies={data.results[i].species}
            chtype={data.results[i].type}
            chgender={data.results[i].gender}
            chlocation={data.results[i].location.name}
            chimage={data.results[i].image}
          />);
          for (let i=0; i<data.info.count; i++){
            listc.push(<option value={i+1}>{i+1}</option>);
          }
          setListcharacter([...listc]);
        }
        if (listn.length === (ncharacter || 20)){
          setListcards([...listn]);
        }
      }).catch(function(err){console.log('Fetch Error :-S', err);});

      if(!nlocation)
      fetch(URLAPI+'location').then((res) => res.json()).then((data) => {
        setNlocation(data.info.count);
        for (let i=0; i<data.info.count; i++){
          listc.push(<option>{i+1}</option>);
        }
        setListlocation([...listc]);
      }).catch(function(err){console.log('Fetch Error :-S', err);});
      
      if(!nepisode)
      fetch(URLAPI+'episode').then((res) => res.json()).then((data) => {
        setNepisode(data.info.count);
        for (let i=0; i<data.info.count; i++){
          listc.push(<option>{i+1}</option>);
        }
        setListepisode([...listc]);
      }).catch(function(err){console.log('Fetch Error :-S', err);});
    });

    const [filcvalue,setFilcvalue] = useState(0);
    const [fillvalue,setFillvalue] = useState(0);
    const [filevalue,setFilevalue] = useState(0);
    async function filcharc(event){
      setFilcvalue(event.target.value);
      if (isNaN(event.target.value)) return;
      setNcharacter(0);
      let character =[];
      setListcards([]);
      await fetch(URLAPI+'character/'+event.target.value).then((res) => res.json()).then((data) => {
        character = <Cards
          chid={data.id}
          chname={data.name}
          chstatus={data.status}
          chspecies={data.species}
          chtype={data.type}
          chgender={data.gender}
          chlocation={data.location.name}
          chimage={data.image}
        />
        setListcards([character]);
      }).catch(function(err){console.log('Fetch Error :-S', err);});
    }

    async function filloc(event){
      setFillvalue(event.target.value);
      let characters = [];
      await fetch(URLAPI+'location/'+event.target.value).then((res) => res.json()).then((data) => {
        for (let i=0; i<data.residents.length; i++){
          fetch(data.residents[i]).then((res) => res.json()).then((datac) => {
            characters.push(<Cards
              chid={datac.id}
              chname={datac.name}
              chstatus={datac.status}
              chspecies={datac.species}
              chtype={datac.type}
              chgender={datac.gender}
              chlocation={datac.location.name}
              chimage={datac.image}
            />);
            setListcards([characters]);
          }).catch(function(err){console.log('Fetch Error :-S', err);});
        }
      }).catch(function(err){console.log('Fetch Error :-S', err);});
    }

    async function filep(event){
      setFilevalue(event.target.value);
      let characters = [];
      await fetch(URLAPI+'episode/'+event.target.value).then((res) => res.json()).then((data) => {
        for (let i=0; i<data.characters.length; i++){
          fetch(data.characters[i]).then((res) => res.json()).then((datac) => {
            characters.push(<Cards
              chid={datac.id}
              chname={datac.name}
              chstatus={datac.status}
              chspecies={datac.species}
              chtype={datac.type}
              chgender={datac.gender}
              chlocation={datac.location.name}
              chimage={datac.image}
            />);
            setListcards([...characters]);
          }).catch(function(err){console.log('Fetch Error :-S', err);});
        }
      }).catch(function(err){console.log('Fetch Error :-S', err);});
    }

  return (
    <div className="Bodyapp">
      <div className="Filters">
      Personagem ID:
      <select id="character" value={filcvalue} placeholder='personagem' onChange={filcharc}>
      <option value="0">Personagem</option>
        {listcharacter}
      </select>
      Localização ID:
      <select id="location" value={fillvalue} placeholder='localização' onChange={filloc}>
      <option>Localização</option>
        {listlocation}
      </select>
      Episodio ID:
      <select id="episode" value={filevalue} placeholder='Episodio' onChange={filep}>
      <option>Episodio</option>
        {listepisode}
      </select>
      <span>{filcvalue} {fillvalue} {filevalue}</span>
      </div>
      <div className="principal">
        { listcards }
      </div>
    </div>
    /*
    {'character: '+ncharacter}<br/>
    {'location: '+nlocation}<br/>
    {'episode: '+nepisode}<br/>
    <pre>{JSON.stringify(allcharacters, null, " ")}</pre>
    <pre>{JSON.stringify(listcards, null, " ")}</pre>
    */
  );
}

export default Bodyapp;
