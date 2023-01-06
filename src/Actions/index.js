import axios from 'axios';

export function getZapas(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/products/zapatillas')
        
        return dispatch({
        type: 'GET_ZAPAS',
        payload: json.data
        })
    }
}

export function getZapa(id){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/products/zapatillas/' + id)
        
        return dispatch({
        type: 'GET_ZAPA',
        payload: json.data
        })
    }
}