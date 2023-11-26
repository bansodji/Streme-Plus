import React, { useContext, useLayoutEffect } from 'react';
import Template from '../components/Template';
import { TVContext } from '../context/AllTVContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const TV = ({setProgress}) => {
    useLayoutEffect(() => {
        setProgress(10);
        setTimeout(() => {
            setProgress(100);
        }, 200)

    }, []);

    const { tv } = useContext(TVContext);
    const { top10TV } = useContext(TenStackContext);

    return (
        <div className='container'>
            <Template view_all={true} hover_track={true} type="tv" template_id={"tv-pts"} title="Popular TV Series" movies_list={tv.popular} href="/viewall/popular_tv_series?filter=popular&type=tv" />
            
            <Template view_all={true} hover_track={true} type="tv" template_id={"tv-trts"} title="Top Rated TV Series" movies_list={tv.top_rated} href="/viewall/top_rated_tv_series?filter=top_rated&type=tv" />
            
            <TopTen view_all={false} hover_track={true} type="tv" template_id={"tv-t10"} title="Top 20 Series" movies_list={top10TV} href="/viewall/top10" />
        </div>
    )
}

export default TV