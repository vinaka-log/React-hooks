import React from 'react'

const CountClick = (handleClick, children) => {
    console.log('clicked', children)
    return (
        <div>
            <button onClicked={handleClick}>{children}</button>
        </div>
    )
}

export default CountClick
