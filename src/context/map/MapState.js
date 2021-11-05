import React, { useReducer } from "react";
import { SHOW_ENTER_POINT, SHOW_SELECTED_SHOP } from "../types";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";

const MapState = ({ children }) => {
    const initialState = {
        enterPoint: 45,
        selectedShop: null
    }

    const [state, dispatch] = useReducer(mapReducer, initialState)

    const showEnter = enter => dispatch({
            type: SHOW_ENTER_POINT,
            payload: enter })

    const showShop = point => dispatch({
        type: SHOW_SELECTED_SHOP,
        payload: point
    })

    const { enterPoint, selectedShop } = state

    return (
        <MapContext.Provider value={{ showEnter, showShop, enterPoint, selectedShop }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapState