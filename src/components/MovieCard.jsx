import React from 'react';
import styled from 'styled-components';
import { ENV } from '../env/env';

const Container = styled.div`
    width: 100%;
    height: 14rem;
    border-radius: 4px !important;

    @media(max-width: ${({theme})=>theme.screen.sm}){
        height: 9rem;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 4px;

    .box{
        width: inherit;
        height: inherit;
        border-radius: 4px;
        img{
            border-radius: 4px !important;
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }

    .box-overlay{
        position: absolute;
        width: inherit;
        height: inherit;
        top: 0;
    }
`;

const MovieCard = ({ movie }) => {
    const baseImageUrl = ENV.IMAGE_BASE_URL;
    const posterSize = ENV.POSTER_SIZE;
    let poster_path = "";

    if (movie != undefined) {
        poster_path = `${baseImageUrl}${posterSize}${movie.poster_path}`;
    }

    return (
        <Container className='px-1'>
            <Box>
                <div className="box">
                    <img src={poster_path} alt={movie.title} />
                </div>
                <div className="box-overlay fff"></div>
            </Box>
        </Container>
    )
}

export default MovieCard;