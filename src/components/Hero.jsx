import React from 'react';
import styled from 'styled-components';
import { GradientButton } from '../styles/Buttons';

const Wrapper = styled.section`
  width: 100%;
  position: relative;

  @keyframes para {
    100% {
      background-position: -5000px 20%, -800px 95%, 500px 50%, 1000px 100%, 400px 0;
    }
  }

  @keyframes parag {
    100% {
      background-position: 5000px 20%, 800px 95%, 500px 50%, 1000px 100%, 400px 0;
  }
  }

  .img-banner-bg-1 {
    width: 100%;
    height: 50vh;
    background-image: url("/images/bannerbg1.jpg");
    background-repeat: repeat-x;
    background-position: 0 20%, 0 100%, 0 50%, 0 100%, 0 0;
    background-size: 2500px, 800px, 500px 200px, 1000px, 400px 260px;
    animation: 90s para infinite linear;
    padding: 190px 0;
    
  }
  .img-banner-bg-2 {
    width: 100%;
    height: 50vh;
    background-image: url("/images/bannerbg2.jpg");
    background-repeat: repeat-x;
    background-position: 0 20%, 0 100%, 0 50%, 0 100%, 0 0;
    background-size: 2500px, 800px, 500px 200px, 1000px, 400px 260px;
    animation: 90s parag infinite linear;
    padding: 190px 0;
  }

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    .img-banner-bg-1, .img-banner-bg-2{
      /* height: 200px !important;
      background-size: cover; */
    }    
  }

  .hero-items{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }

`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="w-100">
        {/* Banner images */}
        <div className="img-banner-bg-1"></div>
        <div className="img-banner-bg-2"></div>

        {/* Hero items */}
        <div className='hero-items'>
          <p className='fs-2 fff'>DISCOVER UNLIMITED MOVIES, TV SHOWS, WEB SERIES ONLY ON STREME+</p>
          <a href='#NowPlaying'><GradientButton>Discover Now</GradientButton></a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero;