import React from 'react'

const Button = ({ handleClick, element, quote, twitter }) => {

    const tweet = quote.body + " " + quote.author + ".";
    return (
        <>
            <div className="btns">
                <div className="next" onClick={handleClick}>
                    {element}</div>
                <a href={`https://twitter.com/intent/tweet?text=${tweet}`} target="_blank">{twitter}</a>
            </div>
        </>
    )
}

export default Button