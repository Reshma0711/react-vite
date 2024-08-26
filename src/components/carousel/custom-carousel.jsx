import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CustomCarousel=()=>{
 
        return (
            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} width={500}/>
                    <p className="legend">Photo 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} width={500}/>
                    <p className="legend">Photo 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} width={500}/>
                    <p className="legend">Photo 3</p>
                </div>
            </Carousel>
        );
    }

export default CustomCarousel