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
        <p className='text-center'>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <a href="https://www.themoviedb.org" target='_blank'>
          <img src="/images/tmdb_logo.svg" alt="" />
        </a>
      </div>
      <div className='spaces'></div>
    </Container>
  )
}

export default Footer