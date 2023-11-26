import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";
import ISkeleton from './ISkeleton';
import { MovieDetailsModal } from './Modal';
import EpisodeCard from './EpisodeCard';

const Container = styled.div`
    position: relative;
`;

const Template = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
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

    if (props.movies_list.length == 0) {

    }
    return (
        <Container className='my-4'>
            <div className="">
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='heading'>{props.title}</h5>
                    {
                        (props.view_all)
                            ?
                            <Link to={props.href}>
                                <h6 className='d-flex align-items-center hover'>
                                    View All
                                    <span className='fs-5' style={{ paddingBottom: 5 }}><RiArrowRightSLine /></span>
                                </h6>
                            </Link>
                            : ""
                    }

                </div>
                {
                    (props.movies_list.length == 0)
                        ? <ISkeleton ItemCount={10} />
                        :
                        <>
                            <Slider {...settings}>
                                {
                                    props.movies_list.map((data, index) => {
                                        if (props.episode) {
                                            return (
                                                <EpisodeCard key={index} type={props.type} movie={data} template_id={props.template_id} id={index} />
                                            )
                                        }
                                        else {
                                            return (
                                                <MovieCard key={index} type={props.type} movie={data} template_id={props.template_id} id={index} />
                                            )
                                        }
                                    })
                                }
                            </Slider>
                            {
                                (props.hover_track)
                                    ?
                                    <div className='hover-track'>
                                        <div className='grid-5 w-100 h-100'>
                                            {
                                                props.movies_list.map((data, index) => {
                                                    return (
                                                        // <div className="col-2" key={index} >
                                                        <MovieDetailsModal key={index} type={props.type} movie={data} template_id={props.template_id} id={`hover-card-${index}`} />
                                                        // </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                    : ""
                            }
                        </>
                }

            </div>
        </Container>
    )
}

export default Template;