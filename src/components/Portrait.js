import React from 'react'

const Portrait = ({ quote }) => {

    const author = quote.author;

    const image = (author) => {
        if (author === "Marcus Aurelius") {
            // return "./images/Aurelius.png";
            return "https://i.ibb.co/gdgnBZ4/Aurelius.png";
        } else if (author === "Cato") {
            return "https://i.ibb.co/CV6kHZr/Cato.png";
        } else if (author === "Epictetus") {
            return "https://i.ibb.co/qgdV9j6/Epictetus.png";
        } else if (author === "Seneca") {
            return "https://i.ibb.co/hMd6skN/Seneca.webp";
        } else if (author === "Zeno") {
            return "https://i.ibb.co/xs9msFP/Zeno.png";
        }

    }

    const authorImg = image(author);


    return (
        <>
            <img src={authorImg} alt="Bust of Greek philosopher" />
        </>
    )
}

export default Portrait