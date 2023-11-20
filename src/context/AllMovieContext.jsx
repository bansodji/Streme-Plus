import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ENV } from '../env/env';

const MovieContext = createContext();

const AllMovieContext = ({ children }) => {
    const [movies, setMovies] = useState({
        top_rated: [],
        popular: [],
        upcoming: [],
        now_playing: []
    });

    const getAllMovies = async () => {
        const API_KEY = ENV.API_KEY;
        const filters = ["top_rated", "popular", "upcoming", "now_playing"];
        const endpoint = ENV.MOVIE_URL;

        try {
            await Promise.all(filters.map(async (filter) => {
                const response = await axios.get(`${endpoint}/${filter}?api_key=${API_KEY}`);
                setMovies(prevMovies => ({
                    ...prevMovies,
                    [filter]: response.data.results
                }));
            }));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ movies }}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, AllMovieContext };
