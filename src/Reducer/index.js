
const initialState = {
    zapas: [],
    allZapas: [],
    detail: {},
    cart: []
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

        // case "ADD_TO_CART":
        //     const item = action.payload;
        //     return {
        //         ...state,
        //         cart: [...state.cart, item]
        //     };
        case "ADD_TO_CART":
            const item = state.cart.find((item) => item._id === action.payload._id ? true : false);
            
            return {
                ...state,
                cart: item ? state.cart.map((item) =>
                    item._id === action.payload._id ? { ...item, qty: item.qty + 1} : item
                ) : [...state.cart, { ...action.payload, qty: 1}]
            };

        case "REMOVE_TO_CART":
            return {
                ...state,
                cart: state.cart.filter(e => e._id !== action.payload)
            };

        case "POST_PRODUCT":
            return {
                 ...state,
                 detail: action.payload
            };

        default:
            return state
    }

}

export default rootReducer;