import react, { useEffect, useState } from 'react';

export function useCharService() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const limit = 30;

    useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            const CharWithPrice = data.results.map((char) => ({
                ...char,
                price: Math.floor(Math.random() * 100) + 1,
            }));
            setCharacters(CharWithPrice);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
}, []); 
    return {
        loading: loading,
        characters: characters || [],
        error: error,
        limit: limit
    }
}