import React from 'react'

const Quote = ({ quote }) => {
    return (
        <>
            <p className="quote-body">{quote.body}</p>
            <p className="author">{quote.author}</p>
        </>
    )
}

export default Quote