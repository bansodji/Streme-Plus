import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SubscribeBtn } from '../styles/Buttons';
import { FaCrown } from "react-icons/fa6";
import { NavListOutline, NavListSolid } from '../data/HeaderData';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const Wrapper = styled.header`
    z-index: 9999;
    .active{
        color: ${({ theme }) => theme.colors.theme1};
    }
    .hover:hover{
        color: ${({ theme }) => theme.colors.theme1};
    } 
`;

const HeaderLg = styled.div`
    z-index: 9999;
    @media(max-width:${({ theme }) => theme.screen.md}){
        display: none !important;
    } 
    width: ${({ theme }) => theme.other.layout};
    height: 100vh;
    position: fixed;
    .brand{
        img{
            width: 100px;
            filter: drop-shadow(red 1px 1px 20px);
        }
    }

    .nav-item{
        font-size: 1.4rem;
    }

    ul:hover > .nav-item a{        
        position: relative;        
            &::after{
                content: attr(data-name);
                width: 100%;
                position: absolute;
                font-size: 1rem;
                font-weight: 600;
                text-transform: uppercase;
                left: 150%;
                top: 16%;
            }
    }
    
`;

const HeaderSm = styled.div`
    display: none !important;
    .nav-list{
        z-index: 9999;
        width: 94%;
        border-radius: 30px;
        background-color: ${({ theme }) => theme.colors.surface};
        position: fixed;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.8rem;
        box-shadow: ${({ theme }) => theme.other.boxShadow};
    }

    @media(max-width:${({ theme }) => theme.screen.md}){
        display: block !important;
    }

    .appbar{
        z-index: 9999;
        width: 100%;
        .brand{
            img{
                width: 100px;
            }
        }
    }
`;

const ThemeSwitch = styled.div`
    cursor: pointer;
    
    .sun{
        color: ${({ theme }) => theme.colors.sun};
        font-size: 1.5rem;
    }
    .moon{
        color: ${({ theme }) => theme.colors.moon};
        font-size: 1.5rem;
    }
`;

const Header = ({ setTheme, light, dark }) => {
    const [currTheme, setCurrTheme] = useState("dark");
    const location = useLocation();

    const NavList = Object.keys(NavListOutline);

    const handleThemeIconClick = (_theme) => {
        setCurrTheme(_theme);
        currTheme == "dark" ? setTheme(light) : setTheme(dark);
    }

    const ThemeSwitchIcon = () => {
        return (
            <ThemeSwitch>
                {
                    currTheme == "dark"
                        ? <a className='btn sun' onClick={() => { handleThemeIconClick("light") }}>{<BiSolidSun />}</a>
                        : <a className='btn moon' onClick={() => { handleThemeIconClick("dark") }}>{<BiSolidMoon />}</a>
                }
            </ThemeSwitch>
        );
    }

    return (
        <Wrapper>
            <HeaderLg className='d-flex flex-column align-items-center justify-content-between py-3 text-center'>
                <div className='d-flex flex-column'>
                    <Link to="/" className='brand'>
                        <img src="/images/logo.png" alt="Streme+" />
                    </Link>
                    <Link to="/subscribe"><SubscribeBtn className='mt-3'><FaCrown /> Subscribe</SubscribeBtn></Link>
                </div>
                <div className='w-100'>
                    <ul className='w-100'>
                        {
                            NavList.map((data, index) => {
                                let link = (data == "home") ? "/" : data.replace(/ /g, "");
                                let pathname = (location.pathname == "/") ? location.pathname : location.pathname.split("/")[1];
                                return (
                                    <li
                                        key={index}
                                        className='my-4 nav-item'
                                    >
                                        <Link
                                            data-name={data}
                                            to={link}
                                            className={`hover ${pathname == link ? "active" : ""}`}
                                        >
                                            {pathname == link ? NavListSolid[data] : NavListOutline[data]}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ThemeSwitchIcon />
                </div>
            </HeaderLg>

            <HeaderSm>
                <div className='appbar d-flex align-items-center justify-content-between px-2'>
                    <Link to="/" className='brand'>
                        <img src="/images/logo.png" alt="Streme+" />
                    </Link>
                    <div className='d-flex align-items-center'>
                        <Link to="/subscribe"><SubscribeBtn>Subscribe</SubscribeBtn></Link>
                        <ThemeSwitchIcon />
                    </div>
                </div>
                <ul className='nav-list d-flex justify-content-between px-4'>
                    {
                        NavList.map((data, index) => {
                            let link = (data == "home") ? "/" : data.replace(/ /g, "");
                            let pathname = (location.pathname == "/") ? location.pathname : location.pathname.split("/")[1];
                            return (
                                <li
                                    key={index}
                                    className={`py-1 hover ${pathname == link ? "active" : ""}`}
                                >
                                    <Link
                                        to={link}
                                    >
                                        {pathname == link ? NavListSolid[data] : NavListOutline[data]}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </HeaderSm>
        </Wrapper>
    );
}

export default Header;