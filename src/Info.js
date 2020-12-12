import React, {  useEffect, useState } from 'react';
import Axios from "axios";
import styled from "styled-components";

export default function Info(props) {
    const {characterId, close } = props
    const [info, setInfo] = useState([])

    useEffect(() => {
        Axios
        .get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((res) => { 
            console.log(res.data)
            setInfo(res.data)
        })
        
        .catch((err)=>{
            console.log(err)
        })
    },[characterId, setInfo])

    return (
        <div className='container'>
          {
            info &&
            <>
              <StyledName>{info.name}'s Picture</StyledName>
            <img src={info.image} alt='img of character' />
            </>
          }
          <button onClick={close}>Close</button>
        </div>
      )
}

const StyledName = styled.p`
color: whitesmoke;
`