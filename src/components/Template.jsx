import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const Container = styled.div`

`;

const Template = (props) => {
    return (
        <Container className='my-5'>
            <div className="container-fluid">
                <h4 className='heading'>{props.title}</h4>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={4}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                        },
                        420: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        992: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    {
                        props.movies_list.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <MovieCard movie={data} />
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </div>
        </Container>
    )
}

export default Template;