import React, { useReducer } from "react";
import { GET_SHOP, GET_SHOPS, SET_LOADING, CLEAR_SHOPS } from '../types'
import { shopsReducer } from "./shopsReducer";
import { ShopsContext } from "./ShopsConext";
import axios from "axios";


const ShopsState = ({ children }) => {
    const initialState = {
        loading: false,
        shops: [],
    }

    const [state, dispatch] = useReducer(shopsReducer, initialState)

    const renderShops = async () => {
        setLoading()

        const response = await axios.get(
            'https://map-with-navigation-default-rtdb.firebaseio.com/shops.json'
        )

        dispatch({
            type: GET_SHOPS,
            payload: response.data
        })
    }

    const clearShops = () => {
        dispatch({
            type: CLEAR_SHOPS,
            payload: []
        })
    }

    const search = async value => {
        setLoading()

        const response = await axios.get(
            'https://map-with-navigation-default-rtdb.firebaseio.com/shops.json'
        )

        function filterByQuery(shops, value) {
            // тут либо возращается пустой массив либо массив с объектами которые подходят под запрос
            return shops.filter((v) => {
                const title = v.title.toLowerCase()
                return title.split(' ').some(word => word.startsWith(value.toLowerCase())) // true/ false
            })
        }

        const searchedShop = filterByQuery(response.data, value)

        console.log(searchedShop,'searchedShop')

        dispatch({
            type: GET_SHOP,
            payload: searchedShop
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING })

    const { loading, shops, shop } = state

    return (
        <ShopsContext.Provider value={{
            renderShops,
            search,
            clearShops,
            loading, shops, shop
        }}>
            {children}
        </ShopsContext.Provider>
    )
}

export default ShopsState