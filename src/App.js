import React, {  useEffect,useState } from 'react';
import Axios from "axios";
import './App.css';
import Character from './character';
import Info from './Info'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const[characters, setCharacters] = useState([])
const[currentCharacterId, setCharacterId] = useState('1')
// const[characterOrigin, setCharacterOrigin] = useState(null)
// const[characterSpecies, setCharacterSpecies] = useState(null)
const openInfo = (id) => {
  setCharacterId(id);
};

const closeInfo = () => {
  setCharacterId(null);
};

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  useEffect(() => {
    Axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then ((res) => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.





  return (
    <div className="App">
      <h1 className="Header">characters</h1>
     {characters.map((ch) => {
       return <Character key={ch.id} info={ch} action={openInfo}/>
     })}
     {currentCharacterId && (
       <Info characterId={currentCharacterId} close={closeInfo} />
     )}

    </div>
  );
}

export default App;
