import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 9999999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        font-weight: 900;
    }

    .brand{
        img{
          width: 200px;
        }
    }

    .loader{
        animation: animate 2.4s linear infinite;
        position: relative;
        display: flex;
    }

    @keyframes animate {
        0%{
            text-shadow: 0 0 10px rgbs(0,0,0,0);
            transform: scale(1);
        }
        40%{
            text-shadow: 0 10px 20px rgbs(0,0,0,0.2);
            transform: scale(1.2);
        }
        80%,100%{
            text-shadow: 0 0 10px rgbs(0,0,0,0);
            transform: scale(1);
        }
    }
`;

const Span = styled.span`
    font-weight: 900;
    color: ${({ theme }) => theme.colors.theme1};
    animation: animate 2.4s linear infinite;

    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.3s;
    }
    &:nth-child(3) {
        animation-delay: 0.6s;
    }
    &:nth-child(4) {
        animation-delay: 0.9s;
    }
    &:nth-child(5) {
        animation-delay: 1.2s;
    }
    &:nth-child(6) {
        animation-delay: 1.5s;
    }
    &:nth-child(7) {
        animation-delay: 1.8s;
    }
    &:nth-child(8) {
        animation-delay: 2.1s;
    }
    
`;

const PreLoader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {!isLoaded && (
                <Wrapper>
                    <h1 className='display-1 font-900 uppercase loader space-4'>
                        <Span>L</Span>
                        <Span>o</Span>
                        <Span>a</Span>
                        <Span>d</Span>
                        <Span>i</Span>
                        <Span>n</Span>
                        <Span>g</Span>
                        <Span>.</Span>
                    </h1>
                </Wrapper>
            )}
        </>
    );
}

export default PreLoader;