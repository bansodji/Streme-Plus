import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Header from './components/Header';

const Main = styled.main`
    margin-left: ${({ theme }) => theme.other.layout};
    
    @media(max-width: ${({theme})=>theme.screen.md} ){
      margin-left: 0;
    }
`;

const App = () => {

  //   #CBB26A
  // #D8C690
  // #BE9E44
  // #1A1A1A
  // #E5D9B6
  // #ef7b71

  const light = {
    colors: {
      theme1: "#f1584a",
      theme2: "#fab75d",
      theme2a: "#fab65d57",
      body: "#f1f1f1",
      surface: "#ffffff",
      heading: "#1d2127",
      text: "#1d2127",
      white: "#fff",
      black: "#000",
      gold: "#996515",
      gold_: "#9964151c",
      sun: "#feca57",
      moon: "#2c3e50",
      active: "#000",
    },
    other: {
      boxShadow: "0px 0px 3.6px rgba(0, 0, 0, 0.017),0px 0px 10px rgba(0, 0, 0, 0.025),0px 0px 24.1px rgba(0, 0, 0, 0.033),0px 0px 80px rgba(0, 0, 0, 0.05)",
      transitionFast: "300ms",
      transitionMed: "600ms",
      transitionSlow: "1s",
      layout: "120px",
    },
    screen: {
      lg: "992px",
      md: "768px",
      sm: "576px",
    }
  }

  const dark = {
    colors: {
      theme1: "#f1584a",
      theme2: "#fab75d",
      theme2a: "#fab65d57",
      body: "#1d2127",
      surface: "#252930",
      heading: "#d1d7e0",
      text: "#aaaeb6",
      white: "#fff",
      black: "#000",
      gold: "#D8C690",
      gold_: "#9964151c",
      sun: "#f5f6fa",
      moon: "#f5f6fa",
      active: "#fff",
    },
    other: {
      boxShadow: "0px 0px 3.6px rgba(0, 0, 0, 0.017),0px 0px 10px rgba(0, 0, 0, 0.025),0px 0px 24.1px rgba(0, 0, 0, 0.033),0px 0px 80px rgba(0, 0, 0, 0.05)",
      transitionFast: "300ms",
      transitionMed: "600ms",
      transitionSlow: "1s",
      layout: "120px",
    },
    screen: {
      lg: "992px",
      md: "768px",
      sm: "576px",
    }
  }

  const [theme, setTheme] = useState(dark);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header setTheme={setTheme} light={light} dark={dark} />
      <Main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Main>
    </ThemeProvider>
  )
}

export default App;
