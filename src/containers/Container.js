import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';
import Button from '../components/Button';

const Container = () => {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = function () {
        fetch('https://stoicquotesapi.com/v1/api/quotes/random')
            .then(res => res.json())
            .then(data => setQuote(data))
    }

    const handleClick = () => {
        getQuote();
    }

    return (
        <>
            <div className="quote-box">
                <Quote quote={quote} />
                <Button handleClick={handleClick} />
                <img src="/images/aurelius.png" alt="Marcus Aurelius" />
            </div>
        </>
    )
}


export default Container