import React from 'react'

const Portrait = ({ quote }) => {

    const author = quote.author;

    const image = (author) => {
        if (author === "Marcus Aurelius") {
            return "/images/Aurelius.png";
        }
        return "/images/" + author + ".png"
    }

    const authorImg = image(author);


    return (
        <>
            <img src={authorImg} alt="Bust of Greek philosopher" />
        </>
    )
}

export default Portrait