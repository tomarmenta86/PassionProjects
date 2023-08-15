import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  const fonts = ['Major Mono Display', 'Lobster', 'Caveat', 'Pacifico', 'Quicksand'];

  const [activeFontIndex, setActiveFontIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [fonts.length]);

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
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} interval={5000}>
        <div className={`font-${selectedFont.toLowerCase().replace(/ /g, '-')}`} 
        style={{
           color: '#7DBA84',
           fontSize:'4rem'
           }}
           >
          /DevsByDesign/
        </div>
      </Carousel>

      <Typography  variant="body1"
        style={{
          textAlign: 'center', 
          fontFamily: 'Quicksand', 
          fontSize: '2rem',
        }}
        >
        Welcome to a community of Developers looking to lend a hand in helping one another realize what they're passionate about creating.
      </Typography>
    </Paper>
  );
}

export default Banner;
