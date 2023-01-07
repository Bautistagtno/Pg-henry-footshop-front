import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilters, getZapas } from '../../Actions';
 
export const Filters = () => {

    const inicialState = {
        talla: '',
        precio: '',
        actividad: 'moda'
    };

    let dispatch = useDispatch();
    let [value, setValue] = useState(inicialState);

    useEffect(() => {
        dispatch(getZapas())
    }, []);

    const filterActividad = (e) => {
        setValue({ ...value, actividad: e.target.value })
    };

    const filterTalla = (e) => {
        setValue({ ...value, talla: e.target.value })
    };

    const filterPrecio = (e) => {
        setValue({ ...value, precio: e.target.value })
    };

    const handleOnFilters = () => {
        dispatch(getFilters(value))
    };

    return (
        <div>
            <label> Precio (0 - {value.precio}): </label>
            <input type={'range'} min={0} max={900} onChange={(e) => filterPrecio(e)}/>
            <label>Selecciona una actividad</label>
            <select onClick={(e) => filterActividad(e)}>
                <option value={'Moda'}> Moda </option>
                <option value={'Basquet'}> Basquet </option>
            </select>
            <label>Selecciona una talla</label>
            <select onClick={(e) => filterTalla(e)}>
                <option value={38}> 38 </option>
                <option value={39}> 39 </option>
                <option value={40}> 40 </option>
            </select>
            <button onClick={() => handleOnFilters()}> Aplicar filtros </button>
        </div>
    )
};
