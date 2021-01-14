import React from 'react';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


function Slider({images}) {

    const screenCaps = images.map(img => {
        return <img src={img} className='img-style' alt='src' />
    })

    return (
        <div className='position-relative'>
            <OwlCarousel
            items={1}
            className='owl-theme'
            loop
            dots
            autoplay
            smartSpeed={800}
            >
                {screenCaps}
            </OwlCarousel>
        </div>
    )
}

export default Slider;