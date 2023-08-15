import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  const fonts = ['Major+Mono+Display', 'Lobster', 'Caveat', 'Pacifico', 'Quicksand'];

  const [activeFontIndex, setActiveFontIndex] = useState(0);

  const handleCarouselChange = () => {
    const randomFontIndex = Math.floor(Math.random() * fonts.length);
    setActiveFontIndex(randomFontIndex);
  };
//Timed Carousel//
  const selectedFont = fonts[activeFontIndex];

  return (
    <Paper
      elevation={20}
      style={{
        padding: '4rem',
        margin: '2rem',
        backgroundColor: 'gray',
      }}
    >
      <Carousel showThumbs={true} onClickItem={handleCarouselChange}>
        <div className={`font-${selectedFont} text-3xl`} style={{ color: '#7DBA84' }}>
          /DevsByDesign/
        </div>
        <div className="font-lobster text-3xl" style={{ color: '#333' }}>
          /DevsByDesign/
        </div>
        <div className="font-serif text-3xl" style={{ color: '#7DBA84' }}>
          /DevsByDesign/
        </div>
        <div className={`font-${selectedFont} text-3xl`} style={{ color: '#7DBA84' }}>
          /DevsByDesign/
        </div>

      </Carousel>
      <Typography variant="body1">
        Welcome to a community of Developers looking to lend a hand in helping one another realize what they're passionate about creating.
      </Typography>
    </Paper>
  );
}

export default Banner;
