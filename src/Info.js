import React, {  useEffect, useState } from 'react';
import Axios from "axios";

export default function Info(props) {
    const {characterId, close } = props
    const {info, setInfo} = useState([])

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
          <h2>Info:</h2>
          {
            info &&
            <>
              <p>{info.name}</p>
            <img src={info.image} alt='img of character' />
            </>
          }
          <button onClick={close}>Close</button>
        </div>
      )
}

