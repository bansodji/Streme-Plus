import React, { useContext } from 'react';
import Hero from '../components/Hero';
import Template from '../components/Template';
import { MovieContext } from '../context/AllMovieContext';
import { TVContext } from '../context/AllTVContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const Home = () => {
  const { movies } = useContext(MovieContext);
  const { tv } = useContext(TVContext);
  const { top10Movie, top10TV } = useContext(TenStackContext);

  return (
    <>
      <Hero />
      <div id='NowPlaying'>
        <Template title="Now Playing" movies_list={movies.now_playing} href="viewall/nowplaying" />
      </div>
      <TopTen title="Top 20 Movies" movies_list={top10Movie} href="viewall/top10" />
      <Template title="Trending" movies_list={movies.popular} href="viewall/trending" />
      <Template title="Coming Soon" movies_list={movies.upcoming} href="viewall/commingsoon" />
      <Template title="Top Rated" movies_list={movies.top_rated} href="viewall/toprated" />
      <Template title="Popular TV Series" movies_list={tv.top_rated} href="viewall/tv" />
      <TopTen title="Top 20 Series" movies_list={top10TV} href="viewall/top10" />
    </>
  );
}

export default Home;