import React from 'react';
import Slider from "react-slick";


import slide_one_1 from '../../../assets/slides/slide_one_1.jpg';
import slide_two from '../../../assets/slides/slide_two.jpg';
import slide_three_1 from '../../../assets/slides/slide_three_1.jpg';


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300
    }

    return (
        <div
            className='carrousel_wrapper'
            style={{
                background: 'red',
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
        
            <Slider {...settings}>
                <div>
                    <div
                        className='carousel_image'
                        style={{
                            background: `url(${slide_one_1}) center no-repeat`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>
                </div>
                <div>
                    <div
                        className='carrousel_image'
                        style={{
                            background: `url(${slide_two}) center center no-repeat`,
                            height: `${window.innerHeight}px`,
                            backgroundRepeat: 'no-repeat'
                        }}>
                    </div>
                </div>
                <div>
                    <div
                        className='carousel_image'
                        style={{
                            background: `url(${slide_three_1}) center center no-repeat`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carousel;