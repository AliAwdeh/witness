import React from 'react';
import Slider from 'react-slick';

const Slideshow = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
