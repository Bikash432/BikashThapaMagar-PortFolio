import React, { useState } from 'react';
import './AwardsCarousel.css';

//Import all the images from the awards
import android from "../awards/android.jpeg";
import corit from "../awards/corit.jpeg";
import csvtu from "../awards/csvtu.jpeg";
import data from "../awards/data.jpeg";
import debate from "../awards/debate.jpeg";
import extempore from "../awards/extempore.jpeg";
import football from "../awards/football.jpeg";
import gd from "../awards/gd.jpeg";
import hadoop from "../awards/hadoop.jpeg";
import iit from "../awards/iit.jpeg";
import insta from "../awards/insta.jpg";
import java from "../awards/java.jpeg";
import sportscoor from "../awards/sportscoor.jpeg";
import studentof from "../awards/studentof.jpeg";

// Array of imported images
const awardImages = [
  insta,
  studentof,
  java,
  hadoop,
  android,
  corit,
  csvtu,
  data,
  debate,
  extempore,
  football,
  gd,
  iit,
  sportscoor,
];

const AwardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? awardImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === awardImages.length - 1 ? 0 : prevIndex + 1));
  };

  return ( 
    <div className="carousel-container">
      <h1 className='h1'>AWARDS</h1>
      <button className="carousel-arrow left-arrow" onClick={goToPrevious}>
        &#10094;
      </button>
      
      <div className="carousel-slide">
        <img
          src={awardImages[currentIndex]}
          alt={`Award ${currentIndex + 1}`}
          className="award-image"
        />
      </div>
      
      <button className="carousel-arrow right-arrow" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default AwardsCarousel;
