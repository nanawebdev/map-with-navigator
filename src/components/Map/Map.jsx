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

    41: { x: 302, y: 282 },
    42: { x: 327, y: 313 },
    43: { x: 268, y: 282 },
    44: { x: 262, y: 326 },
    45: { x: 253, y: 335 },
    46: { x: 213, y: 243 },
    47: { x: 150, y: 226 },
    48: { x: 411, y: 282 },
    49: { x: 411, y: 291 },
    50: { x: 434, y: 282 },

    51: { x: 434, y: 291 },
    52: { x: 447, y: 282 },
    53: { x: 465, y: 282 },
    54: { x: 465, y: 434 },
    55: { x: 494, y: 349 },
    56: { x: 505, y: 349 },
    57: { x: 494, y: 282 },
    58: { x: 447, y: 257 },
    59: { x: 447, y: 211 },
    60: { x: 447, y: 181 },

    61: { x: 428, y: 211 },
    62: { x: 428, y: 181 },
    63: { x: 428, y: 149 },
    64: { x: 447, y: 149 },
    65: { x: 447, y: 127 },
    66: { x: 427, y: 127 },
    67: { x: 455, y: 88 },
    68: { x: 482, y:  117 },
    69: { x: 482, y: 88 },
    70: { x: 482, y: 54 },

    71: { x: 493, y: 54 },
    72: { x: 493, y: 42 },
    73: { x: 439, y: 42 },
    74: { x: 428, y: 257 },
    75: { x: 411, y: 31 },
    76: { x: 411, y: 42 },
    77: { x: 91, y: 226 },
    78: { x: 91, y: 243 },
    79: { x: 262, y: 76 },
    80: { x: 150, y: 214 },
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
    25: { 76: 1 },
    27: { 28: 1, 29: 1 },
    28: { 30: 1 },
    30: { 31: 1 },
    32: { 33: 1, 34: 1 },
    34: { 35: 1, 36: 1 },
    36: { 38: 1, 41: 1 },
    38: { 39: 1, 40: 1, 37: 1 },
    40: { 41: 1, 48: 1},
    41: { 42: 1, 44: 1, 43: 1 },
    44: { 45: 1 },
    47: { 18: 1, 46: 1, 45: 1, 80: 1 },
    48: { 50: 1, 49: 1 },
    50: { 51: 1, 52: 1 },
    52: { 53: 1, 58: 1 },
    53: { 54: 1, 57: 1 },
    55: { 56: 1 },
    57: { 55: 1 },
    58: { 74: 1, 59: 1 },
    59: { 61: 1, 60: 1  },
    60: { 62: 1, 64: 1 },
    64: { 63: 1, 65: 1 },
    65: { 66: 1, 67: 1, 69: 1, 68: 1 },
    69: { 70: 1, 67: 1 },
    70: { 71: 1, 72: 1 },
    72: { 73: 1 },
    73: { 76: 1 },
    76: { 75: 1 },
    77: { 78: 1, 47: 1, 1: 1 },
    78: { 47: 1, 46: 1, 77: 1, 45: 1 },
    79: { 21: 1, 22: 1 },
}

const graph = new Graph(logs)

export default class Map extends React.Component {

    componentDidMount() {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')

        draw(graph.findShortestPath('1', '76'), ctx)
    }

    render() {
        return (
            <div className={c.map}>
                <Icon name="main-block" className={c.mainBlock} color="black" width="591" height="387" />
                {/* 5 */}
                <Icon name="block-1" className={`${c.shop} ${c.block1}`} width="124" height="170" />
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
                {/* 21 */}
                <Icon name="block-7" className={c.block7} color="black" width="77" height="87" />
                {/* 31 */}
                <Icon name="block-8" className={c.block8} color="black" width="87" height="76" />
                {/* 16 */}
                <Icon name="block-34" className={c.block34} color="black" width="89" height="87" />
                {/* 46  */}
                <Icon name="block-35" className={c.block35} color="black" width="53" height="78" />
                {/* 33 */}
                <Icon name="block-36" className={c.block36} color="black" width="40" height="44" />
                {/* 35 */}
                <Icon name="block-37" className={c.block37} color="black" width="40" height="44" />
                {/* 23 */}
                <Icon name="block-27" className={c.block27} color="black" width="34" height="34" />
                {/* 26 */}
                <Icon name="block-28" className={c.block28} color="black" width="34" height="34" />
                {/* 29 */}
                <Icon name="block-26" className={c.block26} color="black" width="42" height="63" />
                {/* 14 */}
                <Icon name="block-16" className={c.block16} color="black" width="13" height="22"/>
                {/* 19 */}
                <Icon name="block-17" className={c.block17} color="black" width="22" height="13" />
                {/* 20  */}
                <Icon name="block-15" className={c.block15} color="black" width="13" height="22" />
                {/* 37 */}
                <Icon name="block-23" className={c.block23} color="black" width="87" height="35" />
                {/* 39 */}
                <Icon name="block-24" className={c.block24} color="black" width="43" height="52" />
                {/* 43 */}
                <Icon name="block-32" className={c.block32} color="black" width="73" height="66" />
                {/* 42 */}
                <Icon name="block-33" className={c.block33} color="black" width="130" height="85" />
                {/* 54 */}
                <Icon name="block-31" className={c.block31} color="black" width="89" height="84" />
                {/* 51 */}
                <Icon name="block-12" className={c.block12} color="black" width="22" height="13" />
                {/* 49 */}
                <Icon name="block-11" className={c.block11} color="black" width="22" height="13" />
                {/* 74 */}
                <Icon name="block-25" className={c.block25} color="black" width="32" height="52" />
                {/* 61 */}
                <Icon name="block-22" className={c.block22} color="black" width="32" height="35" />
                {/* 62 */}
                <Icon name="block-21" className={c.block21} color="black" width="32" height="33" />
                {/* 63 */}
                <Icon name="block-20" className={c.block20} color="black" width="32" height="24" />
                {/* 66 */}
                <Icon name="block-19" className={c.block19} color="black" width="32" height="21" />
                {/* 67 */}
                <Icon name="block-30" className={c.block30} color="black" width="75" height="62" />
                {/* 75 */}
                <Icon name="block-29" className={c.block29} color="black"  width="86" height="34" />
                {/* 56  */}
                <Icon name="block-10" className={c.block10} color="black"  width="86" height="68" />
                {/* 68 */}
                <Icon name="block-9" className={c.block9} color="black"  width="129" height="217" />
                {/* 72 */}
                <Icon name="block-14" className={c.block14} color="black" width="13" height="22" />
                {/* 71 */}
                <Icon name="block-13" className={c.block13} color="black" width="13" height="22" />

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
