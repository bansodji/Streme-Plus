import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MovieContext = createContext();

const AllMovieContext = ({ children }) => {
    const [movies, setMovies] = useState({
        top_rated: [],
        popular: [],
        upcoming: [],
        now_playing: []
    });

    const getAllMovies = async () => {
        const API_KEY = `cd77a7698cf357650fa2e44bae3c25bc`;
        const filters = ["top_rated", "popular", "upcoming", "now_playing"];
        const endpoint = `https://api.themoviedb.org/3/movie`;

        try {
            const updatedMovies = { ...movies };
            for (let filter of filters) {
                const response = await axios.get(`${endpoint}/${filter}?api_key=${API_KEY}`);
                updatedMovies[filter] = response.data.results;
            }
            setMovies(updatedMovies);
            console.log("Updated Movies:", updatedMovies); // Log the updated movies
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
