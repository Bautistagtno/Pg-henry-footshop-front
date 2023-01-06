import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getZapas } from "../Actions";
import Cards from "./Card";
import Paginado from "./Paginado";
import './CSS/Home.css'





export default function Home(){ 
    const dispatch = useDispatch()
    const allZapas = useSelector(state=> state.zapas)
    const [currentPage, setCurrentPage] = useState(1)
    const [zapasPerPage, setZapasPerPage] = useState(5)
    const indexOfLastZapa = currentPage * zapasPerPage
    const indexOfFirstZapa = indexOfLastZapa - zapasPerPage
    const currentZapas = allZapas.slice(indexOfFirstZapa, indexOfLastZapa)

   
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(()=>{
        dispatch(getZapas());
    }, [dispatch])


return(
    
    <div>
       <div className="cards">
        {
           currentZapas && currentZapas.map((e,i)=>{
               return(
                   <div key={i}>
                    <Cards 
                        id={e._id}
                        marca={e.marca} 
                        image={e.imagen1} 
                        modelo={e.modelo} 
                        precio={e.precio} 
                        />
                </div>
            )
        })
    }
        </div>
        
       
        <Paginado
            zapasPerPage={zapasPerPage}
            allZapas={allZapas.length}
            paginado={paginado}
        />
        
      
    </div> 
    )

}