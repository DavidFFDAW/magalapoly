import React, { CSSProperties } from 'react'

export default function loading(): JSX.Element {

    const spinner: CSSProperties = {
        width: 55,
        height: 55,
        border: '5px solid #fff',
        borderTop: '5px solid #000',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        position: 'relative',
    };

    return (
        <div className="spinner" style={spinner}>
        </div>
    )
}
