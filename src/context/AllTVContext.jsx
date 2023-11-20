import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ENV } from '../env/env';

const TVContext = createContext();

const AllTVContext = ({ children }) => {
    const [tv, setTV] = useState({
        top_rated: [],
        popular: []
    });

    const getAllMovies = async () => {
        const API_KEY = ENV.API_KEY;
        const filters = ["top_rated", "popular"];
        const endpoint = ENV.TV_URL;

        try {
            const updatedTV = { ...tv };
            for (let filter of filters) {
                //console.log(`${endpoint}/${filter}?api_key=${API_KEY}`);
                const response = await axios.get(`${endpoint}/${filter}?api_key=${API_KEY}`);
                updatedTV[filter] = response.data.results;
            }
            setTV(updatedTV);
            //console.log("Updated Movies:", updatedTV); // Log the updated movies
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
