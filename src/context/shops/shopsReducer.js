import { GET_SHOPS, SET_LOADING, GET_SHOP, CLEAR_SHOPS } from "./../types";

const handlers = {
    DEFAULT: state => state,
    [GET_SHOPS]: (state, {payload}) => ({...state, shops: payload, loading: false}),
    [GET_SHOP]: (state, {payload}) => ({...state, shops: payload, loading: false}),
    [CLEAR_SHOPS]: (state, {payload}) => ({...state, shops: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true})
}

export const shopsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}