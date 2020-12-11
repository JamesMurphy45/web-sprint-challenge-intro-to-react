import React, {  useEffect,useState } from 'react';
import Axios from "axios";

export default function Info(props) {
    const {characterId, close } = props
    const {info, setInfo} = useState(null)

    useEffect(() => {
        Axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then( res => { setInfo(res.data) })
        .catch((err)=>{
            console.log(err)
        })
    },[characterId])
}

return(
<>
   <h2>Info</h2>
   {}
<p>{info.name}</p>
   <button onClick={close}>Close</button>
    </>
)