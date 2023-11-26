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
          <Template view_all={true} hover_track={true} type="movie" template_id={"movie-np"} title="Now Playing" movies_list={movies.now_playing} href="viewall/now_playing?filter=now_playing&type=movie" />
        </div>

        <TopTen view_all={false} hover_track={true} type="movie" template_id={"movie-t10"} title="Top 20 Movies" movies_list={top10Movie} href="/viewall/top10" />

        <Template view_all={true} hover_track={true} type="movie" template_id={"movie-t"} title="Trending" movies_list={movies.popular} href="/viewall/trending?filter=popular&type=movie" />

        <Template view_all={true} hover_track={true} type="movie" template_id={"movie-cs"} title="Coming Soon" movies_list={movies.upcoming} href="/viewall/comming_soon?filter=upcoming&type=movie" />

        <Template view_all={true} hover_track={true} type="movie" template_id={"movie-tr"} title="Top Rated" movies_list={movies.top_rated} href="/viewall/top_rated?filter=top_rated&type=movie" />

        <Template view_all={true} hover_track={true} type="tv" template_id={"tv-pts"} title="Popular TV Series" movies_list={tv.popular} href="/viewall/popular_tv_series?filter=popular&type=tv" />

        <TopTen view_all={false} hover_track={true} type="tv" template_id={"tv-t10"} title="Top 20 Series" movies_list={top10TV} href="/viewall/top10" />
      </div>
    </>
  );
}

export default Home;