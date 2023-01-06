const initialState = {
    zapas: [],
    allZapas: [],
    zapa: []
}

function rootReducer (state=initialState, action){
    switch(action.type){
        case 'GET_ZAPAS':
            return{
                ...state,
                zapas: action.payload,
                allZapas: action.payload
            }
        case 'GET_ZAPA':
            return{
                ...state,
                zapa: action.payload,
            }
        default:
            return state
        }
    }

export default rootReducer;