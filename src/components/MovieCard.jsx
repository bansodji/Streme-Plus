import React from 'react';
import styled from 'styled-components';
import { ENV } from '../env/env';

const Container = styled.div`
    width: 100%;
    height: 14rem;

    @media(max-width: ${({theme})=>theme.screen.sm}){
        height: 10rem;
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
        border-radius: inherit;
        img{
            border-radius: inherit;
            width: inherit;
            height: inherit;
            object-fit: scale-down;
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
        <Container>
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