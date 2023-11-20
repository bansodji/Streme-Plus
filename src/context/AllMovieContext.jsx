import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to import axios

const MovieContext = createContext();

const AllMovieContext = ({ children }) => { // Include children as a parameter
    const [movie, setMovie] = useState(null); // Set an initial state

    const getAllMovies = async () => {
        const options = {
            method: 'GET',
            url: 'https://ott-details.p.rapidapi.com/advancedsearch',
            params: {
              start_year: '1970',
              end_year: '2020',
              min_imdb: '6',
              max_imdb: '7.8',
              genre: 'action',
              language: 'english',
              type: 'movie',
              sort: 'latest',
              page: '1'
            },
            headers: {
              'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
              'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    return (
        <MovieContext.Provider value={{ movie }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, AllMovieContext };