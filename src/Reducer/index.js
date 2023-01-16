
const initialState = {
    zapas: [],
    allZapas: [],
    detail: [],
    carrito: []
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
        //-------------reducer de carrito---------------------------
        case "AGREGAR_ITEM":
            const enCarrito = state.carrito.find((item) => item._id === action.payload._id ? true : false);
            console.log("ESTO HAY EN CARRTIO RED ", enCarrito);
            return {
                ...state,
                carrito: enCarrito
                    ? state.carrito.map((item) =>
                        item._id === action.payload._id
                            ? {...item, qty: item.qty + 1}
                            : item
                    )
                    : [...state.carrito, {...action.payload, qty: 1}]
            }
        case "REMOVER_ITEM":
            return {
                ...state,
                cart: state.carrito.filter((item) => item._id !== action.payload._id)
            }
        case "AJUSTAR_CANTIDAD":
            return {
                ...state,
                carrito: state.carrito.map((item) => item._id === action.payload._id
                    ? { ...item, qty: + action.payload.qty }
                    : item),
            }
        case "LIMPIAR_ITEMS":
            return {
                carrito: [],
            }
        default:
            return state
    }

}

export default rootReducer;