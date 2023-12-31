import React, { useContext, useLayoutEffect } from 'react';
import Template from '../components/Template';
import { MovieContext } from '../context/AllMovieContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const Movies = ({ setProgress }) => {
    useLayoutEffect(() => {
        setProgress(10);
        setTimeout(() => {
            setProgress(100);
        }, 200)

    }, []);

    const { movies } = useContext(MovieContext);
    const { top10Movie } = useContext(TenStackContext);
    return (
        <div className='container'>
            <Template view_all={true} hover_track={true} type="movie" title="Now Playing" movies_list={movies.now_playing} template_id={"movie-np"} href="/viewall/now_playing?filter=now_playing&type=movie" />
            
            <Template view_all={true} hover_track={true} type="movie" template_id={"movie-t"} title="Trending" movies_list={movies.popular} href="/viewall/trending?filter=popular&type=movie" />
            
            <Template view_all={true} hover_track={true} type="movie" template_id={"movie-cs"} title="Coming Soon" movies_list={movies.upcoming} href="/viewall/comming_soon?filter=upcoming&type=movie" />
            
            <Template view_all={true} hover_track={true} type="movie" template_id={"movie-tr"} title="Top Rated" movies_list={movies.top_rated} href="/viewall/top_rated?filter=top_rated&type=movie" />
            
            <TopTen view_all={false} hover_track={true} type="movie" template_id={"movie-t10"} title="Top 20 Movies" movies_list={top10Movie} href="/viewall/top10" />
        </div>
    )
}

export default Movies