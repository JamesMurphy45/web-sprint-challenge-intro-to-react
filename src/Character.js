import React from 'react';



const Character = ({action, characters, currentCharacterId, info}) => {

  return(
    
    <div>
        
  
  <p>{info.name}</p>
      <button onClick={() => action(info.id)}>See Info</button>
      </div>
  )
}
export default Character