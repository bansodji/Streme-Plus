import React, { useContext } from 'react';
import Template from '../components/Template';
import { MovieContext } from '../context/AllMovieContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const Movies = () => {
    const { movies } = useContext(MovieContext);
    const { top10Movie } = useContext(TenStackContext);
    return (
        <div className='container'>
            <Template title="Now Playing" movies_list={movies.now_playing} template_id={"movie-np"} href="viewall/nowplaying" />
            <Template template_id={"movie-t"} title="Trending" movies_list={movies.popular} href="viewall/trending" />
            <Template template_id={"movie-cs"} title="Coming Soon" movies_list={movies.upcoming} href="viewall/commingsoon" />
            <Template template_id={"movie-tr"} title="Top Rated" movies_list={movies.top_rated} href="viewall/toprated" />
            <TopTen template_id={"movie-t10"} title="Top 20 Movies" movies_list={top10Movie} href="viewall/top10" />
        </div>
    )
}

export default Movies