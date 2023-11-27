import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Slider from "react-slick";

const ISkeleton = ({ ItemCount }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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

    // Create an array of length ItemCount to repeat the Skeleton component
    const skeletonItems = Array.from({ length: ItemCount }, (_, index) => (
        <div className='mx-2' key={index}>
            <Stack spacing={1} >
                <Skeleton variant="rectangular" width="90%" height={200} />
            </Stack>
        </div>
    ));

    return (
        <Slider {...settings}>
            {skeletonItems}
        </Slider>
    );
}


const ISkeletonRow = ({ ItemCount }) => {

    // Create an array of length ItemCount to repeat the Skeleton component
    const skeletonItems = Array.from({ length: ItemCount }, (_, index) => (
        <div className='col-lg-2 col-md-3 col-sm-3 col-4' key={index}>
            <Stack spacing={1} >
                <Skeleton variant="rectangular" width="90%" height={200} />
            </Stack>
        </div>
    ));

    return (
        <>{skeletonItems}</>
    );
}

export default ISkeleton;
export { ISkeletonRow };