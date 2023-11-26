import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { WhiteButton } from '../styles/Buttons';
import { ENV } from '../env/env';
import axios from 'axios';
import { ISkeletonRow } from '../components/ISkeleton';

const Wrapper = styled.section`

`;

let LoadButton = true;

const ViewAll = ({ setProgress }) => {
    useLayoutEffect(() => {
        setProgress(10);
        setTimeout(() => {
            setProgress(100);
        }, 200)

    }, []);

    const { id } = useParams();
    // const { movies } = useContext(MovieContext);
    // const { tv } = useContext(TVContext);

    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(2);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const Filter = queryParams.get('filter');
    const Type = queryParams.get('type');

    const getData = async () => {
        const API_KEY = ENV.API_KEY;
        const endpoint = Type === "tv" ? ENV.TV_URL : ENV.MOVIE_URL;

        try {
            const response = await axios.get(`${endpoint}/${Filter}?page=${page}&api_key=${API_KEY}`);

            // Append new results to existing movies
            setMovies(prevMovies => {
                if (prevMovies === null) {
                    return response.data.results;
                } else {
                    return [...prevMovies, ...response.data.results];
                }
            });

            setTotalPage(response.data.total_pages);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLoadMoreClick = () => {
        if (page <= totalPage) {
            setPage(page + 1);
        }
        else {
            LoadButton = false;
        }
    }

    useEffect(() => {
        getData();
    }, [page]);

    return (
        <Wrapper className='container'>
            <h1 className='title heading text-center my-5'>{id.replace(/_/g, " ")}</h1>
            <div className="row gx-2 gy-3">
                {
                    (movies == null)
                        ? <ISkeletonRow ItemCount={10} />
                        :
                        movies.map((data, index) => {
                            return (
                                <div className="col-lg-2 col-md-3 col-sm-3 col-4" key={index}>
                                    <MovieCard key={index} type={Type} movie={data} template_id={`va`} id={index} />
                                </div>
                            )
                        })
                }
            </div>

            <center>
                <div className={`col-6 col-sm-3 my-4 ${LoadButton?"":"d-none"}`}>
                    <WhiteButton onClick={handleLoadMoreClick}>Load More</WhiteButton>
                </div>
            </center>

        </Wrapper>
    )
}

export default ViewAll;