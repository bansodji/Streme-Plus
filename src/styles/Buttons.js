import styled from "styled-components";

export const SubscribeBtn = styled.button`
    /* width: 110px; */
    color: ${({theme})=>theme.colors.gold};
    background-color: ${({theme})=>theme.colors.gold_};
    font-size: 12px;
    border: 1px solid ${({theme})=>theme.colors.gold};
    border-radius: 5px;
    outline: none;
    padding: 2px 8px;

    &:hover{
        color: ${({theme})=>theme.colors.gold};
        background-color: ${({theme})=>theme.colors.gold_};
    }   


    svg{
        padding-bottom: 3px;
        font-size: 1rem;
    }
`;

export const GradientButton = styled.button`    
      width: 160px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      margin: 20px;
      height: 55px;
      text-align:center;
      border: none;
      background-size: 300% 100%;
      border-radius: 50px;
      moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;


    &:hover {
      background-position: 100% 0;
      moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
    }

    &:focus {
      outline: none;
    }

    background-image: linear-gradient(
        to right,
        #ed6ea0,
        #ec8c69,
        #f7186a,
        #fbb03b
      );
      box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
`;