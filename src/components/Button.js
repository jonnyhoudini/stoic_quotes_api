import React from 'react'

const Button = ({ handleClick, element }) => {
    return (
        <>
            <button onClick={handleClick}>
                Next</button>
            {element}
        </>
    )
}

export default Button