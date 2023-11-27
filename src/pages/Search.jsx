import React, { useLayoutEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { LuSearch } from "react-icons/lu";
import { MovieContext } from '../context/AllMovieContext';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import { ISkeletonRow } from '../components/ISkeleton';

const Wrapper = styled.section`
  @media(max-width:${({ theme }) => theme.screen.md}){
    .xtra-space{
      margin-top: 5rem;
    }
  }
`;

const SearchContainer = styled.div`
  @media(max-width:${({ theme }) => theme.screen.md}){
    width: 100%;
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.colors.body};
    z-index: 9 !important;
  }
`;

const SearchBox = styled.div`
    width: 100%;
    height: 60px;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 4px 14px;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    background-color: ${({ theme }) => theme.colors.surface};
    input{
      width: 100%;
      height: 38px;
      padding: 4px;
      border: none;
      outline:none;
      font-weight: 300;
      background: none;
      color: ${({ theme }) => theme.colors.heading};
      font-weight: 600;
      font-size: 1.3rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        opacity: 1; /* Firefox */
      }
    }
    svg{
      color: ${({ theme }) => theme.colors.heading};
      font-size:2rem;
      margin: 0 5px;
    }
`;


const Search = ({ setProgress }) => {
  const { movies } = useContext(MovieContext);
  const [searchData, setSearchData] = useState([]);

  useLayoutEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 200)

  }, []);

  const fetchData = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            query: searchTerm,
            include_adult: false,
            language: 'en-US',
            page: 1
          },
          headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDc3YTc2OThjZjM1NzY1MGZhMmU0NGJhZTNjMjViYyIsInN1YiI6IjY1NWEzMTE3YjU0MDAyMTRkMTE3ZmMyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K-7sICniMIplbWd7gsRIdb-h9I9zWs4GDNJ26SheDvQ'
          }
        }
      );
      setSearchData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    fetchData(value);
  }

  const PopularSearches = ({ popular_movies, heading }) => {
    return (
      <div className="container popular-searches">
        <h4 className='title heading'>{heading}</h4>
        <div className="row gx-2 gy-3">
          {
            (popular_movies.length == 0)
              ? <ISkeletonRow ItemCount={10} />
              :
              popular_movies.map((data, index) => {
                return (
                  <div className="col-lg-2 col-md-3 col-sm-3 col-4" key={index}>
                    <MovieCard key={index} type="movie" movie={data} template_id={`p`} id={index} />
                  </div>
                )
              })
          }
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <SearchContainer className='container py-4'>
        <SearchBox>
          <LuSearch />
          <input
            type="text"
            placeholder='Movies, shows and more'
            onChange={handleInputChange}
          />
        </SearchBox>
      </SearchContainer>
      <div className="xtra-space"></div>
      {
        searchData.length == 0
          ?<PopularSearches popular_movies={movies.popular} heading="Popular Searches" />
          :<PopularSearches popular_movies={searchData} heading="" />
      }

    </Wrapper>
  )
}

export default Search;