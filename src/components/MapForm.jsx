import React, { useContext, useEffect, useState } from "react";
import Search from './Search';
import Shops from './Shops';
import TitleH2 from './TitleH2';
import EnterSelect from "./EnterSelect";
import { MapContext } from "../context/map/MapContext";

const MapForm = () => {
    const map = useContext(MapContext)
    const [enter, setEnter] = useState(map.enterPoint)

    useEffect(() => {
        map.showEnter(enter)
    }, [enter])  // eslint-disable-line react-hooks/exhaustive-deps


    const onSubmit = enterNumber => {
        setEnter(enterNumber)
    }

    return (
        <React.Fragment>
            <TitleH2 title="1. Выберите вход:" />

            <EnterSelect title="Вход №1" isChecked={enter===1} onChange={() => onSubmit(1)} />
            <EnterSelect title="Вход №2" isChecked={enter===45} onChange={() => onSubmit(45)} />

            <TitleH2 title="2. Выберите магазин:" />
            <Search />
            <Shops />
        </React.Fragment>
    )
}

export default MapForm