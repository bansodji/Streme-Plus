import React, { useContext, useLayoutEffect } from 'react';
import Hero from '../components/Hero';
import Template from '../components/Template';
import { MovieContext } from '../context/AllMovieContext';
import { TVContext } from '../context/AllTVContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const Home = ({ setProgress }) => {
  const { movies } = useContext(MovieContext);
  const { tv } = useContext(TVContext);
  const { top10Movie, top10TV } = useContext(TenStackContext);

  useLayoutEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 200)

  }, []);

  return (
    <>
      <Hero />
      <div className="container">
        <div id='NowPlaying'>
          <Template view_all={true} hover_track={true} type="movie" template_id={"movie-np"} title="Now Playing" movies_list={movies.now_playing} href="viewall/nowplaying" />
        </div>
        <TopTen view_all={true} hover_track={true} type="movie" template_id={"movie-t10"} title="Top 20 Movies" movies_list={top10Movie} href="viewall/top10" />
        <Template view_all={true} hover_track={true} type="movie" template_id={"movie-t"} title="Trending" movies_list={movies.popular} href="viewall/trending" />
        <Template view_all={true} hover_track={true} type="movie" template_id={"movie-cs"} title="Coming Soon" movies_list={movies.upcoming} href="viewall/commingsoon" />
        <Template view_all={true} hover_track={true} type="movie" template_id={"movie-tr"} title="Top Rated" movies_list={movies.top_rated} href="viewall/toprated" />
        <Template view_all={true} hover_track={true} type="tv" template_id={"tv-pts"} title="Popular TV Series" movies_list={tv.popular} href="viewall/tv" />
        <TopTen view_all={true} hover_track={true} type="tv" template_id={"tv-t10"} title="Top 20 Series" movies_list={top10TV} href="viewall/top10" />
      </div>
    </>
  );
}

export default Home;