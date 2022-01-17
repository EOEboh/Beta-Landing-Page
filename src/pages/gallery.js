import React from 'react'

// theme-ui library
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import Layout from 'components/layout';

// react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from 'components/button-group';



// Wedding pictures
import Pic1 from 'assets/images/wedding/wedding1.jpg';
import Pic2 from 'assets/images/wedding/wedding2.jpg';
import Pic3 from 'assets/images/wedding/wedding3.jpg';
import Pic4 from 'assets/images/wedding/wedding4.jpg';
import Pic5 from 'assets/images/wedding/wedding5.jpg';
import Pic6 from 'assets/images/wedding/wedding6.jpg';
import Pic7 from 'assets/images/wedding/wedding7.jpg';
import Pic8 from 'assets/images/wedding/wedding8.jpg';
import Pic9 from 'assets/images/wedding/wedding9.jpg';

// Grad pictures
import Grad1 from 'assets/images/grad/grad1.jpg';
import Grad2 from 'assets/images/grad/grad2.jpg';
import Grad3 from 'assets/images/grad/grad3.jpg';
import Grad4 from 'assets/images/grad/grad4.jpg';
import Grad5 from 'assets/images/grad/grad5.jpg';
import Grad6 from 'assets/images/grad/grad6.jpg';
import Grad7 from 'assets/images/grad/grad7.jpg';
import Grad8 from 'assets/images/grad/grad8.jpg';
import Grad9 from 'assets/images/grad/grad9.jpg';

// Photoshoot pictures
import Photo1 from 'assets/images/photoshoot/photo1.jpg';
import Photo2 from 'assets/images/photoshoot/photo2.jpg';
import Photo3 from 'assets/images/photoshoot/photo3.jpg';
import Photo4 from 'assets/images/photoshoot/photo4.jpg';
import Photo5 from 'assets/images/photoshoot/photo5.jpg';
import Photo6 from 'assets/images/photoshoot/photo6.jpg';
import Photo7 from 'assets/images/photoshoot/photo7.jpg';
import Photo8 from 'assets/images/photoshoot/photo8.jpg';
import Photo9 from 'assets/images/photoshoot/photo9.jpg';
import Photo10 from 'assets/images/photoshoot/photo10.jpg';



const wedding =[
        {picture: Pic1},
        {picture: Pic2},
        {picture: Pic3},    
        {picture: Pic4},    
        {picture: Pic5},
        {picture: Pic6},
        {picture: Pic7},
        {picture: Pic8},
        {picture: Pic9},
        // {picture: Pic11},
        // {picture: Pic12},
        // {picture: Pic13},
]
const grad = [
  {picture: Grad1},
  {picture: Grad2},
  {picture: Grad3},
  {picture: Grad4},
  {picture: Grad5},
  {picture: Grad6},
  {picture: Grad7},
  {picture: Grad8},
  {picture: Grad9},
]

const photoshoot = [
  {picture: Photo1},
  {picture: Photo2},
  {picture: Photo3},
  {picture: Photo4},
  {picture: Photo5},
  {picture: Photo6},
  {picture: Photo7},
  {picture: Photo8},
  {picture: Photo9},
  {picture: Photo10},
]



// react-multi-carousel
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.

    }
  };


function gallery() {
    

    return (
      <>
      
      <Layout>
        <Container sx={styles.containerStyle} id='wedding'>  
        <h2>WEDDING COLLECTION</h2>
        <Box as ='div' sx={styles.carouselWrapper} > 
        <Carousel  
          additionalTransfrom={0}
          arrows={true}
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
          renderButtonGroupOutside = {false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={true}
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


        <Container sx={styles.containerStyle} id='grad'> 
        <h2>GRADUATION COLLECTION</h2>
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={true}
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
            renderButtonGroupOutside = {false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
          >
            {grad.map((item)=> (
                <Box>
                  <Image src={item.picture} />
                </Box>
              ))}
          </Carousel>
              
        </Box>
        </Container>

        <Container sx={styles.containerStyle} id='photo'> 
        <h2>RANDOM PHOTOSHOOT COLLECTION</h2>
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            // customButtonGroup={<ButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside = {false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
          >
            {photoshoot.map((item)=> (
                <Box>
                  <Image src={item.picture} />
                </Box>
              ))}
          </Carousel>
              
        </Box>
        </Container>
        </Layout>
        
        </>
    )
}



const styles = {
    
    containerStyle:{
        textAlign: 'center',
        lineHeight: 1.6,
        fontSize:'20px',
        fontFamily: 'Georgia, serif',
        fontSize: [9, null, null, 10, 12, 45, 16],
        lineHeight: [1.31, null, null, 1.5, null, 1.26],
        letterSpacing: [0, null, null, null, '-1.5px'],
        color: 'red',
        
    },
    carouselWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
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
