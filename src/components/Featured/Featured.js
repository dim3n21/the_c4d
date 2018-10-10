import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import Fade from 'react-reveal/Fade';

class Featured extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>

                <Carousel />
                
                <div className='artist_name'>
                <Fade top duration={2000}>
                    <div className='wrapper'>
                        <span style={{fontSize: '45px'}}> The Unicorn </span><br /><span style={{fontSize: '30px'}}>Hybrid Designer + Developer!!</span>
                    </div>
                </Fade>
                </div>
            </div>
        );
    }
}

export default Featured;