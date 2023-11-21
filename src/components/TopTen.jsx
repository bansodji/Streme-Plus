import React from 'react';
import styled from 'styled-components';
import { ENV } from '../env/env';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";

const Container = styled.div`
    
`;

const CardContainer = styled.div`
    width: 100%;
    height: 14rem;
    border-radius: 4px !important;

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
          font-weight: 600;
          position: absolute;
          top:110%;
          left: 0;
          transform: translateY(-110%);
          text-shadow: 2px 2px #000;
        }
    }
`;

const TopTen = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
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
      <div className="container-fluid">
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='heading'>{props.title}</h5>
          <Link to={props.href}>
            <h6 className='d-flex align-items-center hover'>
              View All
              <span className='fs-5' style={{ paddingBottom: 5 }}><RiArrowRightSLine /></span>
            </h6>
          </Link>
        </div>
        <Slider {...settings}>
          {
            props.movies_list.map((data, index) => {
              return (
                <div key={index} style={{margin: "0 40px"}}>
                  <TopTenCard movie={data} rank={index + 1} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </Container>
  )
}

const TopTenCard = ({ movie, rank }) => {
  const baseImageUrl = ENV.IMAGE_BASE_URL;
  const posterSize = ENV.POSTER_SIZE;
  let poster_path = "";

  if (movie != undefined) {
    poster_path = `${baseImageUrl}${posterSize}${movie.poster_path}`;
  }

  return (
    <CardContainer className='px-1'>
      <Box>
        <div className="box">
          <img src={poster_path} alt={movie.title} />
        </div>
        <div className="box-overlay fff">
          <h1 className='rank display-1'>{rank}</h1>
        </div>
      </Box>
    </CardContainer>
  );
}

export default TopTen;
export { TopTenCard };