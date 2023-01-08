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
                <option value={34}> 34 </option>
                <option value={35}> 35 </option>
                <option value={36}> 36 </option>
                <option value={37}> 37 </option>
                <option value={37.5}> 37.5 </option>
                <option value={38}> 38 </option>
                <option value={39}> 39 </option>
                <option value={40}> 40 </option>
                <option value={41}> 41 </option>
                <option value={41.5}> 41.5 </option>
                <option value={42}> 42 </option>
                <option value={43}> 43 </option>
                <option value={44}> 44 </option>
                <option value={45}> 45 </option>
                <option value={46}> 46 </option>
                <option value={47}> 47 </option>
                <option value={48}> 48 </option>
                <option value={49}> 49 </option>
            </select>
            <button onClick={() => handleOnFilters()}> Aplicar filtros </button>
        </div>
    )
};
