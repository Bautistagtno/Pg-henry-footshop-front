import React, {Fragment , useState} from "react";
import {useForm } from "react-hook-form";
import { postProduct } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const HookForm = () => {

    const dispatch = useDispatch();

    const [input, setInput]=useState({
        actividad:"",
        marca: "",
        imagen1:""  ,        
        imagen2:""  ,        
        imagen2:""  ,        
        precio:1,
        modelo:"",
        talles:[],
        color:[]
    })

    const handleInputChange = (event) => {
        // console.log('event.target.value')
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    }
    // const {register, errors, handleSubmit} = useForm();

    // const onSubmit = (data) => {
    //     console.log(data)
    // }

    
    // -----------------------------------------------------------------------------
    const handleClickAdd = (e) => {
      
        setInput({
            ...input,
            talles: [
              ...input.talles,
              e.target.value
            ]
        });}
    // -----------------------------------------------------------------------------

    const handleSubmit = (e) => {
        e.prevent.default()
        // console.log ()
        dispatch(postProduct(input))
        alert('¡Producto cargado con exito!')
        setInput({
            actividad:"",
            marca: "",
            imagen1:""  ,        
            imagen2:""  ,        
            imagen2:""  ,        
            precio:1,
            modelo:"",
            talles:[],
            color:[]
        })
        // history.push('/home')

    }

    return (
        <Fragment>
            <h2>Carga de productos</h2>
            <form onSubmit={handleSubmit}>
                {/* <form> */}
                <input
                 placeholder="Ingrese la marca..."
                 type="text"
                 name="marca"
                 onChange={handleInputChange}
                />
                   <input
                 placeholder="Ingrese el modelo..."
                 type="text"
                 name="modelo"
                 onChange={handleInputChange}
                />
                   <input
                 placeholder="Ingrese el precio..."
                 type="number"
                 name="precio"
                 onChange={handleInputChange}
                />
                   <input
                 placeholder="Link de la imagen1..."
                 type="text"
                 name="imagen1"
                 onChange={handleInputChange}
                />
                   <input
                 placeholder="Ingrese la imagen2..."
                 type="text"
                 name="imagen2"
                 onChange={handleInputChange}
                />   <input
                placeholder="Ingrese la imagen3..."
                type="text"
                name="imagen3"
                onChange={handleInputChange}
               />
                  <input
                 placeholder="Ingrese el o los colores..."
                 type="text"
                 name="color"
                 onChange={handleInputChange}
                />
                   <input
                 placeholder="Ingrese los talles"
                 type="number"
                 name="talles"
                 onChange={handleClickAdd}

                />
                 <button type="button"  onClick={handleClickAdd}>
                 Agregar nuevo paso
             </button>
                   <input
                 placeholder="Actividad"
                 type="text"
                 name="actividad"
                 onChange={handleInputChange}
                />


                <button type="submit" onClick={handleSubmit}>Enviar</button>
                    
                
            </form>
            
            <button><Link to="/home">Volver</Link></button>
        </Fragment>
    );
}




export default HookForm;

