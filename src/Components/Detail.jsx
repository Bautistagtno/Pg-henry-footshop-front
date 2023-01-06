import React, { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getZapa } from '../Actions';


export default function Details(){

   const {id} = useParams()

   const dispatch = useDispatch()

   useState(()=> {
    dispatch(getZapa(id))
   }, [id])

   const zapa = useSelector(state => state.zapa)
   console.log(zapa)
   return(
    <>
    
    
    {zapa && <h1>{zapa.modelo}</h1>}
    {zapa && <h2>{"Color : " + zapa.color}</h2>}
    {zapa && <h2>{"Marca :" + zapa.marca}</h2>}
    {zapa && <h2>{"Precio :" + zapa.precio + "$"}</h2>}
    {zapa && <img src={zapa.imagen1}></img>}
    <ul>
     <li>{zapa && <h3>{zapa.talles}</h3>}</li>
    </ul>
    {zapa && <h2>{"Actividad : " + zapa.actividad}</h2>}
    <button>Comprar</button>
    </>
      );
   }
   