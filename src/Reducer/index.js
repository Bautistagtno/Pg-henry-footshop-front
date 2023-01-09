
const initialState = {
    zapas: [],
    allZapas: [],
    detail: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_ZAPAS':
            return {
                ...state,
                zapas: action.payload,
                allZapas: action.payload
            };

        case 'GET_MODELO_ZAPAS':
            return {
                ...state,
                zapas: action.payload,
            };
        case 'GET_ZAPA_BY_ID':
            return {

                ...state,
                detail: action.payload
            };

        case "GET_FILTERS":
            return {
                ...state,
                zapas: action.payload
            };

        case "POST_PRODUCT":
            return {
                ...state,
            };

        default:
            return state
    }

}

export default rootReducer;