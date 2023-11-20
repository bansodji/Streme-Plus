import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const TVContext = createContext();

const AllTVContext = ({ children }) => {
    const [tv, setTV] = useState({
        top_rated: [],
        popular: []
    });

    const getAllMovies = async () => {
        const API_KEY = `cd77a7698cf357650fa2e44bae3c25bc`;
        const filters = ["top_rated", "popular"];
        const endpoint = `https://api.themoviedb.org/3/tv`;

        try {
            const updatedTV = { ...tv };
            for (let filter of filters) {
                //console.log(`${endpoint}/${filter}?api_key=${API_KEY}`);
                const response = await axios.get(`${endpoint}/${filter}?api_key=${API_KEY}`);
                updatedTV[filter] = response.data.results;
            }
            setTV(updatedTV);
            console.log("Updated Movies:", updatedTV); // Log the updated movies
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <TVContext.Provider value={{ tv }}>
            {children}
        </TVContext.Provider>
    );
};

export { TVContext, AllTVContext };
