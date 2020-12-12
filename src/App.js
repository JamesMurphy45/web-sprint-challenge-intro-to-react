import React, {  useEffect,useState } from 'react';
import Axios from "axios";
import './App.css';
import Character from './Character'
import Info from './Info'
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const[characters, setCharacters] = useState([])
const[currentCharacterId, setCurrentCharacterId] = useState(null)
// const[characterOrigin, setCharacterOrigin] = useState(null)
// const[characterSpecies, setCharacterSpecies] = useState(null)
const openInfo = (id) => {
  setCurrentCharacterId(id);
};

const closeInfo = () => {
  setCurrentCharacterId(null);
};

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  useEffect(() => {
    Axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then ((res) => {
        console.log(res.data.results)
        setCharacters(res.data.results)
        
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.





  return (
    <div className="App">
      <StyledHeader className="Header">Rick and Morty Character List</StyledHeader>
     {characters.map((ch) => {
       return <Character  key={ch.id} info={ch} action={openInfo}/>
     })}
     {currentCharacterId && (
       <Info characterId={currentCharacterId} close={closeInfo} />
     )}

    </div>
  );
}
 const StyledHeader = styled.h1`
 color:whitesmoke;
 text-decoration: underline;
 `
export default App;
