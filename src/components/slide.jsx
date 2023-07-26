import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from '../assets/slideimg.png';
import slide2 from '../assets/slideimg1.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1630,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '80px', 
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '60px', 
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px', 
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px', 
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '6px', 
        },
      },
    ],
  };

  return (
    <div className="p-9">
      <Slider {...settings}>
        <div className="p-4 rounded-md">
          <img src={slide1} alt="" className="rounded-xl w-auto" />
        </div>
        <div className="p-4 rounded-md">
          <img src={slide2} alt="" className="rounded-xl w-auto" />
        </div>
        <div className="p-4 rounded-md">
          <img src={slide1} alt="" className="rounded-xl w-auto" />
        </div>
        <div className="p-4 rounded-md">
          <img src={slide1} alt="" className="rounded-xl w-auto" />
        </div>
        <div className="p-4 rounded-md">
          <img src={slide2} alt="" className="rounded-xl w-auto" />
        </div>
        <div className="p-4 rounded-md">
          <img src={slide1} alt="" className="rounded-xl w-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
