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

export function getModeloZapas(modelo){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/products/zapatillas?modelo=${modelo}`)
            return dispatch({
            type: 'GET_MODELO_ZAPAS',
            payload: json.data
        })
            
        }catch(error){
            console.error(error)
        }
        
}
}

export function getZapaById(id){
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/products/zapatillas/${id}`)
            return dispatch({
                type: 'GET_ZAPA_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}