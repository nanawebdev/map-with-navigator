import React, {useState, useContext} from "react";
import { ShopsContext } from "../context/shops/ShopsConext";

const Search = () => {
    const [value, setValue] = useState('')
    const shops = useContext(ShopsContext)

    const onSubmit = e => {
        if (e.key !== 'Enter') {
            return
        }
    
        shops.clearShops()

        if(value.trim()) {
            shops.search(value.trim())
        }
    }

    return (
            <div className="p-4 d-flex flex-column">
                <label htmlFor="search" className="form-label">Это поиск по названию: </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="search"
                    placeholder=""
                    onKeyPress={onSubmit}
                    value={value}
                    onChange={ e => setValue(e.target.value)}
                />
            </div>
    )
}

export default Search