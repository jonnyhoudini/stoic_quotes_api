import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';
import Button from '../components/Button';
import Portrait from '../components/Portrait';

const Container = ({ element, twitter }) => {

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

            <Portrait quote={quote} />
            <div className="quote-box">
                <Quote quote={quote} />
                <Button handleClick={handleClick} element={element} quote={quote} twitter={twitter} />

            </div>
        </>
    )
}


export default Container