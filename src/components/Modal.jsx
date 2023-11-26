import React from 'react';
import styled from 'styled-components';
import { SqIconBtn, WhiteButton } from '../styles/Buttons';
import TruncatedText from './TruncatedText';
import { FaPlus } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { ENV } from '../env/env';

const MovieDetailsModalContainer = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    visibility: hidden;
    /*transition: visibility 0.7s, opacity 0.7s ease-in-out;*/
    /* display: none; */

    @media(max-width:${({ theme }) => theme.screen.lg}){
        display: none;
    }

    .modal-container{
        cursor: pointer;
        width: 20rem;
        height: 23rem;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.colors.surface};  
        overflow: hidden;      
        position: absolute;
        left: 14%;
        transform: translateX(-14%);
    }
    
    .poster{
        width:100%;
        height: 40%;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px; /* Adjust the height of the border as needed */
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${({ theme }) => theme.colors.surface_50}, ${({ theme }) => theme.colors.surface} 100%);
        }
    }

    .details{
        .star{
            color: ${({ theme }) => theme.colors.theme2};
            padding-bottom: 4px;
            font-size: 1.3rem;
        }

        .text{
            font-size: 0.9rem;
        }
        .dot svg{
            padding-bottom: 4px;
        }
    }

`;

const MovieDetailsModal = ({ movie, id, template_id, type }) => {
    //==creating movie image path start=== 
    const baseImageUrl = ENV.IMAGE_BASE_URL;
    const posterSize = ENV.POSTER_SIZE;
    let poster_path = "";
    let backdrop_path = "";

    if (movie != undefined) {
        poster_path = `${baseImageUrl}${posterSize}${movie.poster_path}`;
        backdrop_path = `${baseImageUrl}${posterSize}${movie.backdrop_path}`;
    }
    //==creating movie image path end===

    const release_year = new Date(movie.release_date).getFullYear().toString();
    const first_air_date = new Date(movie.first_air_date).getFullYear().toString();

    const handleMouseLeave = () => {
        let MovieDetailsModal = document.getElementById(`${template_id}-${id}`);
        MovieDetailsModal.style.visibility = "hidden";
    }
    return (
        <div>
            <MovieDetailsModalContainer
                id={`${template_id}-${id}`}
                onMouseLeave={() => { handleMouseLeave() }}
            >
                <div className='modal-container'>
                    <div className='poster'>
                        <img className='poster-img' src={backdrop_path} alt="movie title" loading="lazy" />
                    </div>
                    <div className='details p-3'>
                        <div className='d-flex buttons'>
                            <Link className='w-100' to={`/watchnow?id=${movie.id}&type=${type}`}>
                                <WhiteButton>
                                    <IoPlay />
                                    Watch Now
                                </WhiteButton>
                            </Link>
                            <Tooltip title="Watchlist" placement="top">
                                <SqIconBtn className='ms-2'>
                                    <FaPlus />
                                </SqIconBtn>
                            </Tooltip>
                        </div>
                        <div className='my-3'>
                            <h6 className='text-center'>
                                <span>{release_year == "NaN" ? first_air_date : release_year}</span>&nbsp; <span className='dot'><GoDotFill /></span> &nbsp;
                                <span>{/* {movie.original_language} */}English</span>&nbsp; <span className='dot'><GoDotFill /></span> &nbsp;
                                <TiStarFullOutline className='star' /><span id='Rating'>{movie.vote_average.toFixed(1)}</span>&nbsp; <span className='dot'><GoDotFill /></span> &nbsp;
                                <span>{movie.adult ? "A" : "UA"}</span>
                            </h6>
                        </div>
                        <div className='text'>
                            <h6 className='heading'>{(movie.title == undefined) ? movie.original_name : movie.title}</h6>
                            <p><TruncatedText text={movie.overview} maxLength={80} /></p>
                        </div>
                    </div>
                </div>
            </MovieDetailsModalContainer>
        </div>
    )
}

export { MovieDetailsModal };