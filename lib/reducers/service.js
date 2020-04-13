import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from "../actions"

const service = (state = {type: null, error: null, data: null}, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_ERROR:
            return Object.assign({}, state, {
                error: action.error,
                type: FETCH_PRODUCTS_ERROR
              })
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                type: FETCH_PRODUCTS_SUCCESS,
                data: action.data
              })
        default:
            return state
    }
}

export default service