import { SHOW_ENTER_POINT, SHOW_SELECTED_SHOP } from "../types"

const handlers = {
    DEFAULT: state => state,
    [SHOW_ENTER_POINT]: (state, {payload}) => ({...state, enterPoint: payload}),
    [SHOW_SELECTED_SHOP]: (state, {payload}) => ({...state, selectedShop: payload}),
}

export const mapReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}