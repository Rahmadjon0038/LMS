import React from 'react'
import './style.css'
function MiniLoader({ size, color, speed }) {
    const style = {
        '--uib-size': size || '1.5rem',
        '--uib-color': color || '#ced1d4',
        '--uib-speed': speed || '.9s'
    };
    return (
        <div>
            <div className="dot-spinner " style={style}>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>
    )
}

export default MiniLoader