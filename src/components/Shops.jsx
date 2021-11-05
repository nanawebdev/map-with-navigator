import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/map/MapContext";
import { ShopsContext } from "../context/shops/ShopsConext";


const Shops = () => {
    const shops = useContext(ShopsContext)
    const map = useContext(MapContext)
    const [shop, setShop] = useState(map.selectedShop)
    const [selectedPoint, setSelectedPoint] = useState(null)

    useEffect(() => {
        shops.renderShops()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        map.showShop(shop)
    }, [shop]) // eslint-disable-line react-hooks/exhaustive-deps


    const onShopSubmit = point => {
        setShop(point)
        setSelectedPoint(point)
    }

    return (
        <div className="d-flex flex-wrap">
            {shops.loading
                && <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {shops.shops ?
                shops.shops.map(v => {
                    return (
                        <div key={v.id} className="card m-2 flex-grow-1 ">
                            <div className="card-body">
                                <h5 className="card-title">{v.title}</h5>
                                <div className="card-text">{v.description}</div>
                                
                                    {
                                        v.point === selectedPoint 
                                            ?   <button type="button" className="btn btn-primary m-2">Выбрано</button>
                                            : <button type="button" className="btn btn-outline-primary m-2" onClick={() => onShopSubmit(v.point)}>Выбрать</button>
                                    } 

                            </div>

                        </div>
                    )
                })
                : null
            }
        </div>
    )
}

export default Shops