import React from 'react'
import Slider from "react-slick";
export const Supporter = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className='mx-5'>
<h2 className=' text-center mb-5 text-title text-2xl'>Our Key Partners</h2>

        <Slider {...settings}>
          <div>
            <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/brand-icon-04.png'></img>
          </div>
          <div>
            <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/brand-icon-05.png'></img>
          </div>
          <div>
            <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/brand-icon-01.png'></img>
          </div>
          <div>
            <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/brand-icon-02.png'></img>
          </div>
          <div>
            <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/brand-icon-03.png'></img>
          </div>
         
          <div>
            <img src='https://maxcoach.jamstacktemplates.dev/images/brand/client-logo-01.png'></img>
          </div>
          <div>
            <img src='https://maxcoach.jamstacktemplates.dev/images/brand/client-logo-02.png'></img>
          </div>
          <div>
            <img src='https://maxcoach.jamstacktemplates.dev/images/brand/client-logo-03.png'></img>
          </div>
          <div>
            <img src='https://maxcoach.jamstacktemplates.dev/images/brand/client-logo-04.png'></img>
          </div>
          <div>
            <img src='https://maxcoach.jamstacktemplates.dev/images/brand/client-logo-05.png'></img>
          </div>
          <div>
            <img src='https://maxcoach.jamstacktemplates.dev/images/brand/client-logo-01.png'></img>
          </div>
         
          <div>
            <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/brand-icon-04.png'></img>
          </div>
         
          
        </Slider>
    </div>
  )
}
