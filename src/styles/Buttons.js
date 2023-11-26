import styled from "styled-components";

export const SubscribeBtn = styled.button`
    /* width: 110px; */
    color: ${({ theme }) => theme.colors.gold};
    background-color: ${({ theme }) => theme.colors.gold_};
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    border-radius: 5px;
    outline: none;
    padding: 2px 8px;

    &:hover{
        color: ${({ theme }) => theme.colors.gold};
        background-color: ${({ theme }) => theme.colors.gold_};
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

export const WhiteButton = styled.button`
  background-color: ${({ theme }) => theme.button.btn_bg_1};
  border: none;
  outline: none;
  padding: 0;
  font-size: 1rem;
  padding: 6px 10px;
  width: 100%;
  height: 3rem;
  color: ${({ theme }) => theme.button.btn_1};
  border-radius: 8px;
  font-weight: 500;

  svg{
    color: ${({ theme }) => theme.colors.heading_};
    padding-bottom: 2px;
    font-size: 1.2rem;
  }
`;

export const WhiteButton2 = styled.button`
  background-color: ${({ theme }) => theme.button.white};
  border: none;
  outline: none;
  padding: 0;
  font-size: 1rem;
  padding: 6px 10px;
  width: 100%;
  height: 3rem;
  color: ${({ theme }) => theme.button.footer};
  border-radius: 8px;
  font-weight: 500;

  svg{
    color: ${({ theme }) => theme.colors.footer};
    padding-bottom: 2px;
    font-size: 1.2rem;
  }
`;

export const SqIconBtn = styled.button`
  width: 3.5rem;
  height: 3rem;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;

export const ChipBtn = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 13px;
`;