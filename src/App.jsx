import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Header from './components/Header';
import "./styles/slick_slider.css";
import Footer from './components/Footer';
import Movies from './pages/Movies';
import TV from './pages/TV';
import WatchNow from './pages/WatchNow';
import User from './pages/User';
import Search from './pages/Search';
import ScrollToTop from './components/ScrollToTop';
import LoadingBar from 'react-top-loading-bar'
import ViewAll from './pages/ViewAll';
import PreLoader from './components/PreLoader';

const Main = styled.main`
    margin-left: ${({ theme }) => theme.other.layout};
    
    @media(max-width: ${({ theme }) => theme.screen.md} ){
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
      surface_50: "#ffffff6d",
      heading: "#1d2127",
      heading_: "#fff",
      text: "#1d2127",
      white: "#fff",
      black: "#000",
      gold: "#BE9E44",
      gold_: "#9964151c",
      sun: "#feca57",
      moon: "#2c3e50",
      active: "#000",
      footer: "#101317",
      grey: "#3f4043",
    },
    button: {
      btn_bg_1: "#101317",
      btn_1: "#fff",
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
      surface: "#2e323a",
      surface_50: "#2e323a6d",
      // heading: "#d1d7e0",
      heading: "#fff",
      heading_: "#1d2127",
      text: "#aaaeb6",
      white: "#fff",
      black: "#000",
      gold: "#BE9E44",
      gold_: "#9964151c",
      sun: "#f5f6fa",
      moon: "#f5f6fa",
      active: "#fff",
      footer: "#101317",
      grey: "#3f4043",
    },
    button: {
      btn_bg_1: "#fff",
      btn_1: "#101317",
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
  const [progress, setProgress] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <GlobalStyle />
      {/* <PreLoader/> */}
      <LoadingBar
        color={dark.colors.theme1}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header setTheme={setTheme} light={light} dark={dark} />
      <Main>
        <Routes>
          <Route exact path='/' element={<Home setProgress={setProgress} />} />
          <Route exact path='/movies' element={<Movies setProgress={setProgress} />} />
          <Route exact path='/tv' element={<TV setProgress={setProgress} />} />
          <Route exact path='/watchnow' element={<WatchNow setProgress={setProgress} />} />
          <Route exact path='/user' element={<User setProgress={setProgress} />} />
          <Route exact path='/search' element={<Search setProgress={setProgress} />} />
          <Route exact path='/subscribe' element={<User setProgress={setProgress} />} />
          <Route exact path='/viewall/:id' element={<ViewAll setProgress={setProgress}/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Main>
    </ThemeProvider>
  )
}

export default App;
