import React from 'react';
import styled from "styled-components";



const Character = ({action, info}) => {

  return(
    
    <div>
        <StyledCharacter>{info.name}</StyledCharacter>
        <StyledButton onClick={() => action(info.id)}>See Picture</StyledButton>
     </div>
  )
}

const StyledCharacter = styled.p`
color: white;
display: flex;
justify-content:center;
`

const StyledButton = styled.button`
color: red;
`

export default Character