import React, { useContext } from 'react';
import Template from '../components/Template';
import { MovieContext } from '../context/AllMovieContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const Movies = () => {
    const { movies } = useContext(MovieContext);
    const { top10Movie } = useContext(TenStackContext);
    return (
        <>
            <Template title="Now Playing" movies_list={movies.now_playing} href="viewall/nowplaying" />
            <TopTen title="Top 20 Movies" movies_list={top10Movie} href="viewall/top10" />
            <Template title="Trending" movies_list={movies.popular} href="viewall/trending" />
            <Template title="Coming Soon" movies_list={movies.upcoming} href="viewall/commingsoon" />
            <Template title="Top Rated" movies_list={movies.top_rated} href="viewall/toprated" />
        </>
    )
}

export default Movies