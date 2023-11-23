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
      <div className="container">
        <div id='NowPlaying'>
          <Template title="Now Playing" movies_list={movies.now_playing} template_id={"movie-np"} href="viewall/nowplaying" />
        </div>
        <TopTen template_id={"movie-t10"} title="Top 20 Movies" movies_list={top10Movie} href="viewall/top10" />
        <Template template_id={"movie-t"} title="Trending" movies_list={movies.popular} href="viewall/trending" />
        <Template template_id={"movie-cs"} title="Coming Soon" movies_list={movies.upcoming} href="viewall/commingsoon" />
        <Template template_id={"movie-tr"} title="Top Rated" movies_list={movies.top_rated} href="viewall/toprated" />
        <Template template_id={"tv-pts"} title="Popular TV Series" movies_list={tv.popular} href="viewall/tv" />
        <TopTen template_id={"tv-t10"} title="Top 20 Series" movies_list={top10TV} href="viewall/top10" />
      </div>
    </>
  );
}

export default Home;