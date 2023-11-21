import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";

const Container = styled.div`
    
`;

const Template = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
        ]
    };
    return (
        <Container className='my-4'>
            <div className="container-fluid">
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='heading'>{props.title}</h5>
                    <Link to={props.href}>
                        <h6 className='d-flex align-items-center hover'>
                            View All
                            <span className='fs-5' style={{paddingBottom:5}}><RiArrowRightSLine /></span>
                        </h6>
                    </Link>
                </div>
                <Slider {...settings}>
                    {
                        props.movies_list.map((data, index) => {
                            return (
                                // <div key={index}>
                                <MovieCard key={index} movie={data} />
                                // </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </Container>
    )
}

export default Template;