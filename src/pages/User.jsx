import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { GradientButton } from '../styles/Buttons';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .brand{
    img{
      width: 200px;
    }
  }
`;

const User = ({ setProgress }) => {
  useLayoutEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 200)

  }, []);

  return (
    <Wrapper>
      <center className='container'>
        <h1>Login to
          &nbsp;
          <Link to="/" className='brand'>
            <img src="/images/logo.png" alt="Streme+" />
          </Link>
        </h1>
        <p className='font-400'>Start watching from where you left off, personalise for kids and more</p>
        <GradientButton>Login</GradientButton>
      </center>
    </Wrapper>
  )
}

export default User;