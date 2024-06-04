import {useEffect, useState} from 'react';

export default function useFetch(id) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [accommodationById, setAccommodationById] = useState(null);
    const url = '../data.json'

    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
    }

    async function fetchAccommodationById(id) {
        if (id) {
            const accommodation = data.find(accommodation => accommodation.id === id);
            setAccommodationById(accommodation);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url)
    }, []);

    useEffect(() => {
        if (id) {
            fetchData(url);
        }
    }, [id])

    useEffect(() => {
        if(data) {
            fetchAccommodationById(id);
        }
    }, [data]);


    return {data, accommodationById, isLoading};
}
