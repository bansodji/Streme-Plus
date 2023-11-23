import React, { useContext } from 'react';
import Template from '../components/Template';
import { TVContext } from '../context/AllTVContext';
import { TenStackContext } from '../context/TopTenContext';
import TopTen from '../components/TopTen';

const TV = () => {
    const { tv } = useContext(TVContext);
    const { top10TV } = useContext(TenStackContext);

    return (
        <div className='container'>
            <Template template_id={"tv-pts"} title="Popular TV Series" movies_list={tv.popular} href="viewall/tv" />
            <Template template_id={"tv-trts"} title="Top Rated TV Series" movies_list={tv.top_rated} href="viewall/tv" />
            <TopTen template_id={"tv-t10"} title="Top 20 Series" movies_list={top10TV} href="viewall/top10" />
        </div>
    )
}

export default TV