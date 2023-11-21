import React from 'react';
import styled from 'styled-components';
import { ENV } from '../env/env';
import { WhiteButton } from '../styles/Buttons';
import { Link } from 'react-router-dom';
import { IoPlay } from "react-icons/io5";
import TruncatedText from './TruncatedText';

const Container = styled.div`
    width: 100%;
    height: 14rem;
    border-radius: 4px !important;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.screen.sm}){
        height: 9rem;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 4px;
    
    &:hover > .box-hover{
        display: block;
    }

    @media(max-width: ${({ theme }) => theme.screen.md}){
        &:hover > .box-hover{
            display: none;
        }
    }

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

    .text{
        font-size: 12px;
        color: ${({ theme }) => theme.colors.white};
    }

`;

const MovieCard = ({ movie }) => {
    const baseImageUrl = ENV.IMAGE_BASE_URL;
    const posterSize = ENV.POSTER_SIZE;
    let poster_path = "";
    let backdrop_path = "";

    if (movie != undefined) {
        poster_path = `${baseImageUrl}${posterSize}${movie.poster_path}`;
        backdrop_path = `${baseImageUrl}${posterSize}${movie.backdrop_path}`;
    }

    return (
        <Container className='px-1'>
            <Link to={`/watchnow?id=${movie.id}`}>
                <Box>
                    <div className="box">
                        <img src={poster_path} alt={movie.title} loading="lazy" />
                    </div>
                    <div className="box-overlay fff"></div>
                </Box>
            </Link>
        </Container>
    )
}

export default MovieCard;