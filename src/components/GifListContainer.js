import React, { useState } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

const GifListContainer = () => {
    const [gifs, setGifs] = useState([]);

    const fetchGifs = (query) => {
        const apiKey = 'Xne4XVVvj3aKaFVHuuVELoyTjWVx9AjY';
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`)
            .then(response => response.json())
            .then(data => {
                setGifs(data.data.slice(0, 3)); 
            })
            .catch(error => {
                console.error('Error fetching gifs:', error);
            });
    };

    return (
        <div>
            <GifSearch onSubmit={fetchGifs} />
            <GifList gifs={gifs} />
        </div>
    );
};

export default GifListContainer;
