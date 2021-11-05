import React from 'react'

export const MapPointer = ({num, className}) => {

    const styles = {
        "width": "25px",
        "height": "25px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
    }
    return (
        <div 
            className={`border border-dark border-1 rounded-circle p-1 ${className}`}
            style={styles}
        >
            <span>{num}</span>
        </div>
    )
}