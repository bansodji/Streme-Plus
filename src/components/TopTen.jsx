import React from 'react';
import styled from 'styled-components';
import { ENV } from '../env/env';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";
import ISkeleton from './ISkeleton';
import { MovieDetailsModal } from './Modal';

const Container = styled.div`
    position: relative;
`;

const CardContainer = styled.div`
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

    .box{
        width: inherit;
        height: inherit;
        border-radius: 4px;
        img{
            border-radius: 4px !important;
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

        .rank{
          position: absolute;
          font-weight: 600;
          top:110%;
          left: 0;
          transform: translateY(-100%);
          text-shadow: 2px 2px #000;
        }
    }
`;

const TopTen = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
    ]
  };
  return (
    <Container className='my-4'>
      <div className="">
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='heading'>{props.title}</h5>
          {
            (props.view_all)
              ?
              <Link to={props.href}>
                <h6 className='d-flex align-items-center hover'>
                  View All
                  <span className='fs-5' style={{ paddingBottom: 5 }}><RiArrowRightSLine /></span>
                </h6>
              </Link>
              : ""
          }

        </div>
        {
          (props.movies_list.length == 0)
            ? <ISkeleton ItemCount={10} />
            :
            <>
              <Slider {...settings}>
                {
                  props.movies_list.map((data, index) => {
                    return (
                      <div key={index} style={{ margin: "0 40px" }}>
                        <TopTenCard type={props.type} movie={data} rank={index + 1} template_id={props.template_id} id={index} />
                      </div>
                    )
                  })
                }
              </Slider>
              {
                (props.hover_track)
                  ?
                  <div className='hover-track'>
                    <div className='grid-5 w-100 h-100'>
                      {
                        props.movies_list.map((data, index) => {
                          return (
                            <MovieDetailsModal key={index} type={props.type} movie={data} template_id={props.template_id} id={`hover-card-${index}`} />
                          )
                        })
                      }
                    </div>
                  </div>
                  : ""
              }

            </>
        }

      </div>
    </Container>
  )
}

const TopTenCard = ({ movie, rank, template_id, id, type }) => {
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

  //===handle mouse hover start===
  let hoverTimer;
  const handleMouseEnter = (event, movieCardId, hoverCardId) => {
    // console.log(movieCardId, hoverCardId)
    hoverTimer = setTimeout(() => {
      const HoverMovieCard = document.getElementById(hoverCardId);
      HoverMovieCard.style.visibility = "visible";
    }, ENV.CARD_DELAY);
  }
  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
  }
  //===handle mouse hover end===

  return (
    <CardContainer
      id={`${template_id}-movie-card-${id}`}
      className='px-1'
      onMouseEnter={(event) => { handleMouseEnter(event, `${template_id}-movie-card-${id}`, `${template_id}-hover-card-${id}`) }}
      onMouseLeave={(event) => { handleMouseLeave() }}
    >
      <Link to={`/watchnow?id=${movie.id}&type=${type}`}>
        <Box>
          <div className="box">
            <img src={poster_path} alt={movie.title} loading="lazy" />
          </div>
          <div className="box-overlay fff">
            <h1 className='rank display-1'>{rank}</h1>
          </div>
        </Box>
      </Link>
    </CardContainer>
  );
}

export default TopTen;
export { TopTenCard };