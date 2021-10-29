import React from "react";
import { Icon } from "../Icon/Icon";
import { Graph } from './../../main-algorythm'
import c from './Map.module.css'

// массив всех точек 
const coordinates = {
    1: { x: 91, y: 204 },
    2: { x: 91, y: 181 },
    3: { x: 130, y: 181 },
    4: { x: 91, y: 157 },
    5: { x: 62, y: 157 },
    6: { x: 129, y: 157 },
    7: { x: 143, y: 157 },
    8: { x: 129, y: 100 },
    9: { x: 111, y: 100 },
    10: { x: 172, y: 100 },
    11: { x: 172, y: 108 },
    12: { x: 172, y: 84 },
    13: { x: 262, y: 100 },
    14: { x: 286, y: 100 },
    15: { x: 262, y: 116 },
    16: { x: 262, y: 136 },
    17: { x: 302, y: 116 },
    18: { x: 302, y: 100 },
    19: { x: 301, y: 76 },
    20: { x: 319, y: 100 },
    21: { x: 262, y: 54 },
    22: { x: 302, y: 54 },
    23: { x: 302, y: 31 },
    24: { x: 338, y: 54 },
    25: { x: 338, y: 41 },
    26: { x: 338, y: 31 },
    27: { x: 338, y: 88 },
    28: { x: 338, y: 100 },
    29: { x: 358, y: 88 },
    30: { x: 338, y: 116 },
    31: { x: 338, y: 138 },
    32: { x: 302, y: 211 },
    33: { x: 288, y: 211 },
    34: { x: 302, y: 243 },
    35: { x: 288, y: 243 },
    36: { x: 302, y: 257 },
    37: { x: 338, y: 224 },
    38: { x: 338, y: 257 },
    39: { x: 358, y: 257 },
    40: { x: 338, y: 282 },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    // : { x: , y: },
    79: { x: 262, y: 76 },
}


// массив всех переходов (типо из 1 можно попасть в 8, и во 2) 
const logs = {
    1: { 2: 1 },
    2: { 3: 1, 4: 1 },
    4: { 6: 1, 5: 1 },
    6: { 7: 1, 8: 1 },
    8: { 9: 1, 10: 1 },
    10: { 11: 1, 12: 1, 13: 1 },
    13: { 15: 1, 79: 1, },
    15: { 16: 1, 17: 1 },
    17: { 18: 1, 30: 1, 32: 1 },
    18: { 14: 1, 20: 1, 19: 1 },
    22: { 23: 1, 24: 1 },
    24: { 25: 1, 27: 1 },
    27: { 28: 1, 29: 1 },
    28: { 30: 1 },
    30: { 31: 1 },
    32: { 33: 1, 34: 1 },
    34: { 35: 1, 36: 1 },
    36: { 38: 1, 41: 1 },
    38: { 39: 1, 40: 1, 37: 1 },
    40: { 41: 1, 48: 1, 42: 1 },
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    // : {},
    79: { 21: 1, 22: 1 },
}

const graph = new Graph(logs)

export default class Map extends React.Component {

    componentDidMount() {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')

        draw(graph.findShortestPath('1', '7'), ctx)
    }

    render() {
        return (
            <div className={c.map}>
                <Icon name="main-block" className={c.mainBlock} color="black" width="591" height="387" />
                {/* 5 */}
                <Icon name="block-1" className={c.block1} color="black" width="124" height="170" />
                {/* 9 */}
                <Icon name="block-2" className={c.block2} color="black" width="13" height="22" />
                {/* 47 */}
                <Icon name="block-18" className={c.block18} color="black" width="32" height="15" />
                {/* 7 */}
                <Icon name="block-4" className={c.block4} color="black" width="62" height="50" />
                {/* 11 */}
                <Icon name="block-3" className={c.block3} color="black" width="62" height="37" />
                {/* 3 */}
                <Icon name="block-5" className={c.block5} color="black" width="47" height="31" />
               {/* 12  */}
                <Icon name="block-6" className={c.block6} color="black" width="62" height="87" />

                <canvas className={c.plan} width="591" height="387"></canvas>

            </div>
        )
    }
}

function draw(graph, ctx) {
    ctx.beginPath()

    const firstPoint = graph[0]
    ctx.moveTo(coordinates[firstPoint].x, coordinates[firstPoint].y)

    graph.forEach(v => {
        const point = v
        ctx.lineTo(coordinates[point].x, coordinates[point].y)
    })

    ctx.lineWidth = 5;
    ctx.strokeStyle = "red"
    ctx.stroke()
}
