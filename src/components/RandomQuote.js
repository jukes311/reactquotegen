import React, { useState, useEffect } from 'react'

function GetRandomQuote() {
    const [data, setQuote] = useState(null)

    useEffect(() => {
        fetch('./quotes.json')
            .then(res => res.json())
            .then(setQuote)
            .catch(console.error)
    }, []);

    if(data) {
        var arrayRandom = Math.floor(Math.random() * data.quotes.length);
        var quotedata = data.quotes[arrayRandom];

        return(
            <>
                <h1>"{quotedata.quote}"</h1>
                <h2>by {quotedata.author}</h2>
            </>
        )
    }
    return null;
}

function RandomQuote() {
    return (
        <GetRandomQuote />
    )
}

export default RandomQuote;