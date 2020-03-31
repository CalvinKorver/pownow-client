import {FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS} from '../actions';

const initialState = {
    pending: false,
    products: [],
    error: null,
    success: false
}


const service = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING:
            console.log('pending')
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                products: action.payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;


export default service