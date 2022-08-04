import React from 'react'

const Button = ({ handleClick, element }) => {
    return (
        <>
            <div className="button" onClick={handleClick}>
                {element}</div>

        </>
    )
}

export default Button