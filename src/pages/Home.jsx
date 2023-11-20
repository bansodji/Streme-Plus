import React, { useContext } from 'react';
import Hero from '../components/Hero';
import Template from '../components/Template';
import { MovieContext } from '../context/AllMovieContext';
import { TVContext } from '../context/AllTVContext';

const Home = () => {
  const {movies} = useContext(MovieContext);
  const {tv} = useContext(TVContext);

  return (
    <>
      <Hero />
      <Template title="Now Playing" movies_list={movies.now_playing} />
      <Template title="Trending" movies_list={movies.popular} />
      <Template title="Upcomming" movies_list={movies.upcoming} />
      <Template title="Top Rated" movies_list={movies.top_rated} />
    </>
  );
}

export default Home;