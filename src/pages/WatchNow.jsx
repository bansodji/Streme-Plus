import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ENV } from '../env/env';
import axios from 'axios';
import { GoDotFill } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { ChipBtn } from '../styles/Buttons';
import { SqIconBtn, WhiteButton2 } from '../styles/Buttons';
import { FaPlus } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import IPSelect from '../components/IPSelect';
import Template from '../components/Template';
import { ISkeletonBig } from '../components/ISkeleton';

const heroHeight = "100vh";
const heroWidth = "100%";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

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

`;

const Hero = styled.div`
  width: ${heroWidth};
  height: ${heroHeight};
  /* border: 1px solid #fff; */
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroData = styled.div`
    margin-left: ${({ theme }) => theme.other.layout};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    
    
    
    @media(max-width: ${({ theme }) => theme.screen.md} ){
      margin-left: 0;
    }
`;

const HeroBlur = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
`;

const BelowHero = styled.div`
    width: ${heroWidth};
    height: ${heroHeight};
`;

const Container = styled.div`

`;

const AllEpisodesContainer = styled.div`

`;

const WatchNow = ({ setProgress }) => {
  const [movie, setMovie] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Id = queryParams.get('id');
  const Type = queryParams.get('type');

  //===when url changes start===
  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [location.pathname, location.search]);
  //===when url changes end===

  //==creating movie image path start=== 
  const baseImageUrl = ENV.IMAGE_BASE_URL;
  const posterSize = ENV.POSTER_SIZE;
  let poster_path = "";
  let backdrop_path = "";

  poster_path = `${baseImageUrl}${posterSize}${movie.poster_path}`;
  backdrop_path = `${baseImageUrl}${posterSize}${movie.backdrop_path}`;

  //==creating movie image path end=== 

  //===extracting other movie info start===
  //release year
  const release_year = new Date(movie.release_date).getFullYear().toString();
  const first_air_date = new Date(movie.first_air_date).getFullYear().toString();

  //runtime
  let hours = Math.floor(movie.runtime / 60);
  let remainingMinutes = movie.runtime % 60;
  let Runtime = hours + "h " + remainingMinutes + "min";

  //language
  let Spoken_Language = (movie.spoken_languages != undefined) ? movie.spoken_languages[0].english_name : "";

  //genres
  let Genres = [];
  if (movie.genres != undefined) {
    for (let x of movie.genres) {
      Genres.push(x.name);
    }
  }
  //===extracting other movie info end===

  const getData = async () => {
    const API_KEY = ENV.API_KEY;
    const Endpoint = (Type === "tv") ? ENV.TV_URL : ENV.MOVIE_URL;

    try {
      const response = await axios.get(`${Endpoint}/${Id}?api_key=${API_KEY}`);
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataByGenre = async () => {
    if (movie.genres != undefined) {
      let gerne_id = movie.genres[0].id;

      try {
        const API_KEY = ENV.API_KEY;
        const response = await axios.get(`https://api.themoviedb.org/3/discover/${Type}?api_key=${API_KEY}&with_genres=${gerne_id}`);
        setGenreMovie(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  }

  useEffect(() => {
    getData();
  }, [Id, Type]);

  useEffect(() => {
    getDataByGenre();
  }, [movie]);

  useLayoutEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 200)
  }, []);

  const HeroComponent = () => {
    return (
      <>
        <Hero style={{ backgroundImage: `url(${backdrop_path})` }}>
          <HeroBlur />
          <HeroData className=''>
            <div className="container-fluid">
              <h1 className='col-lg-6 col-md-8 col-sm-8 gradient-text uppercase space-3 display-4 font-900'>
                {(movie.title == undefined) ? movie.original_name : movie.title}
              </h1>
              <h6 className='fff'>
                <span>{release_year == "NaN" ? first_air_date : release_year}</span>&nbsp; <span className='dot'><GoDotFill /></span> &nbsp;
                <span>{Spoken_Language}</span>&nbsp; <span className='dot'><GoDotFill /></span> &nbsp;
                <TiStarFullOutline className='star' /><span id='Rating'>{(movie.vote_average != undefined) ? movie.vote_average.toFixed(1) : ""}</span>&nbsp; <span className='dot'><GoDotFill /></span> &nbsp;
                <span>{(Type == "tv")
                  ? movie.number_of_episodes + " Episodes"
                  : Runtime}</span>
              </h6>
              <div className='col-lg-6 col-md-8 col-sm-8 mt-4 fff'>
                <p>{movie.overview}</p>
              </div>
              <div>
                {
                  Genres.map((data, index) => (
                    <ChipBtn key={index} className='me-2'>{data}</ChipBtn>
                  ))
                }
              </div>
              <div className='col-lg-6 col-md-8 col-sm-8 mt-4 fff-50 pt-4'>
                <div className='d-flex'>
                  <Link className='w-100' to="/subscribe">
                    <WhiteButton2>
                      <IoPlay />
                      Subscribe to watch
                    </WhiteButton2>
                  </Link>
                  <Tooltip title="Watchlist" placement="top">
                    <SqIconBtn className='ms-2'>
                      <FaPlus />
                    </SqIconBtn>
                  </Tooltip>
                </div>
              </div>
            </div>
          </HeroData>
        </Hero>
        <BelowHero />
      </>
    )
  }

  const AllEpisodes = () => {
    const [allEpisodes, setAllEpisode] = useState([]);

    const CreateEpisodes = () => {
      let SelectSeason = document.getElementById("SelectSeason");
      if (SelectSeason != null) {
        let Season = SelectSeason.firstChild.getAttribute("data-selected");
        // console.log(movie.seasons[Season]);
        let ep_count = movie.seasons[Season].episode_count;

        let Arr = [];
        for (let i = 1; i <= ep_count; i++) {
          let obj = {
            title: "Episode " + i,
            poster_path: movie.seasons[Season].poster_path,
            backdrop_path: movie.seasons[Season].poster_path,
          }
          Arr.push(obj);
        }
        setAllEpisode(Arr);
      }
    }

    const CreateEpisode2 = (Season) => {
      let ep_count = movie.seasons[Season].episode_count;

      let Arr = [];
      for (let i = 1; i <= ep_count; i++) {
        let obj = {
          title: "Episode " + i,
          poster_path: movie.seasons[Season].poster_path,
          backdrop_path: movie.seasons[Season].poster_path,
        }
        Arr.push(obj);
      }
      setAllEpisode(Arr);
    }

    const handleSelect = (selectedValue) => {
      CreateEpisode2(selectedValue[0]);

    };

    useEffect(() => {
      CreateEpisodes();

    }, [movie]);

    return (
      <AllEpisodesContainer className='my-5'>
        <div className='season-select-box'>
          {
            (movie.seasons) ? <IPSelect onSelect={handleSelect} seasons={movie.seasons} id="SelectSeason" /> : ""
          }

        </div>
        <div className='all-episodes'>
          <Template
            hover_track={false}
            type="tv"
            template_id={"tv-ae"}
            title="Episodes"
            movies_list={allEpisodes}
            view_all={false}
            episode={true}
          />
        </div>
      </AllEpisodesContainer>
    )
  }

  return (
    <Wrapper>
      {
        movie.length == undefined ? <HeroComponent /> : <ISkeletonBig/>
      }

      <Container className='my-5 container'>
        {
          (Type == "tv") ? <AllEpisodes /> : ""
        }
        <Template
          hover_track={true}
          type={Type}
          template_id={`${Type}-mlt`}
          title="More Like This"
          movies_list={genreMovie}
          view_all={false}
          episode={false}
        />
      </Container>
    </Wrapper>
  );
};

export default WatchNow;