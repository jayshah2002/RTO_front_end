import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(){

    return (
        <Carousel>
            <div>
                <img src="./rto3.jpg" />
                
            </div>
            <div>
                <img src="./rto1.jpg" />
            </div>
            <div>
                <img src="./rto2.jpg" />
                
            </div>
        </Carousel>
    );
    
}

   
    

export default DemoCarousel;