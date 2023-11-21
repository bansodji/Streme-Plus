import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.footer`
  margin-top: 5rem;
  margin-bottom: 0;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.footer};

  img{
      width: 200px;
  }

  @media(max-width:${({ theme }) => theme.screen.md}){
    .spaces{
      height: 4rem;
    }
  } 
`;

const Footer = () => {
  return (
    <Container className=''>
      <div className="container-fluid text-center">
        <p className='text-center fff'>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <a href="https://www.themoviedb.org" target='_blank'>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="This product uses the TMDb API but is not endorsed or certified by TMDb." loading='lazy'
          />
        </a>
      </div>
      <div className='spaces'></div>
    </Container>
  )
}

export default Footer