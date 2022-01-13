import React from 'react'

// theme-ui library
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';

// react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from 'components/button-group';


import Pic1 from 'assets/images/wedding/wedding1.jpg';
import Pic3 from 'assets/images/wedding/wedding3.jpg';
import Pic5 from 'assets/images/wedding/wedding5.jpg';
import Pic6 from 'assets/images/wedding/wedding6.jpg';
import Pic7 from 'assets/images/wedding/wedding7.jpg';
import Pic8 from 'assets/images/wedding/wedding8.jpg';
import Pic9 from 'assets/images/wedding/wedding9.jpg';

import Pic11 from 'assets/images/wedding/wedding11.jpg';
import Pic12 from 'assets/images/wedding/wedding12.jpg';
import Pic13 from 'assets/images/wedding/wedding13.jpg';




const wedding =[
        {picture: Pic1},
        {picture: Pic3},    
        {picture: Pic5},
        {picture: Pic6},
        {picture: Pic7},
        {picture: Pic8},
        {picture: Pic9},
        {picture: Pic11},
        {picture: Pic12},
        {picture: Pic13},
]


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


function gallery() {
    
// SlideProps={
//     additionalTransfrom: 0,
//     arrows: false,
//     autoPlaySpeed: 3000,
//     centerMode: false,
//     className: '',
//     slidesToSlide: 1,
//     items: 3,
//     containerClass: 'carousel-container',
//     customButtonGroup: <ButtonGroup />,
//     dotListClass: '',
//     focusOnSelect: false,
//     infinite: false,
//     keyBoardControl: false,
//     itemClass: '',
//     minimumTouchDrag: 80,
//     renderButtonGroupOutside: true,
//     renderDotsOutside: false,
//     responsive: responsive,
//     showDots: false,
//     sliderClass: '',
// }

    return (
        <>
        <Container sx={styles.containerStyle} id='wedding'>  
        <h2>WEDDING COLLECTION</h2>
        <Box as ='div' sx={styles.carouselWrapper} > 
        <Carousel  
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
            {wedding.map((item)=> (
                 
                
                <Box sx={styles.imageCard}>
                    <Image src={item.picture} alt=''/>
                </Box>
                
            ))}
        </Carousel>
        </Box>
        </Container>
        </>
    )
}



const styles = {
    containerStyle:{
        textAlign: 'center',
        lineHeight: 1.6,
        fontSize:'20px'
    },
    carouselWrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      
      '.carousel-container': {
        width: '100%',
        mr: ['auto', null, null, null, null, null, null, '-220px'],
        ml: 'auto',
        '.react-multi-carousel-item': {
          transition: 'all 0.25s',
        },
        '.react-multi-carousel-item--active:nth-of-type(4n)': {
          opacity: '0.5',
          '@media screen and (max-width: 1620px)': {
            opacity: 1,
          },
        },
      },
    },
    imageCard:{
        
    }
}









export default gallery
