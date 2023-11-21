import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ENV } from '../env/env';

const TenStackContext = createContext();

const TopTenContext = ({ children }) => {
    const [top10Movie, setTop10Movie] = useState([]);
    const [top10TV, setTop10TV] = useState([]);

    const getAllMovies = async () => {
        const API_KEY = ENV.API_KEY;
        const movie_endpoint = ENV.MOVIE_URL;
        const tv_endpoint = ENV.TV_URL;

        try {
            const response1 = await axios.get(`${movie_endpoint}/top_rated?page=3&api_key=${API_KEY}`);
            const response2 = await axios.get(`${tv_endpoint}/top_rated?page=10&api_key=${API_KEY}`);
            setTop10Movie(response1.data.results)
            setTop10TV(response2.data.results)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <TenStackContext.Provider value={{ top10Movie, top10TV }}>
            {children}
        </TenStackContext.Provider>
    );
};

export { TenStackContext, TopTenContext };
