import Image from 'next/image'
import {useEffect, useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from '../styles/Home.module.css';

export function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  

export default function ProdcutsSlider({products}){

    const initSliderOptions = {
        type      : 'loop',
        rewind: true,
        perPage   :5,
        width : 'auto',
        // perMove   : 1,
        gap       : '2rem',
        pagination: false,
        autoplay:true,
        height    : 200,
      };

    const [windowSize, setWindowSize] = useState({innerWidth:0, innerHeight:0});
    const [sliderOptions,setSliderOptions] = useState(initSliderOptions);

    useEffect(() => {
      function handleWindowResize() {
        const {innerWidth, innerHeight} = getWindowSize();
        if(innerWidth != 0 && innerWidth <= 700)
        {
            setSliderOptions({ ...sliderOptions ,perPage:3 ,gap: '6rem'})
        } else {
            setSliderOptions(initSliderOptions)
        }
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);


    useEffect(() => {
        if(windowSize.innerWidth != 0 &&  windowSize.innerWidth <= 700)
        {
            setSliderOptions({ ...sliderOptions ,perPage:3 ,gap: '6rem'})
        } else {
            setSliderOptions(initSliderOptions)
        }
        
      }, [windowSize.innerWidth]);

    


    

      const imageLoader = ({ src, width, quality }) => {
        // return `https://res.cloudinary.com/dfw7q7qe2/image/upload/${src}`;
        return  `${process.env.NEXT_PUBLIC_IMAGE_HOSTING_URL}/${src}`;
      }

    return (
        <Splide options={sliderOptions} aria-label="My Favorite Images">
              {products.map((item,index) => {
                  return (<SplideSlide key={index} >
                              <div className={styles.item} >
                                <div className={styles.itemImage}>
                                <Image  loader={imageLoader} src={item.src} alt={`image`+ index}  width={168} height={159} layout='responsive'  objectFit='fill' />
                                </div>
                                <div className={styles.itemTitle}><h5>{item.title}</h5></div>
                              </div>
                          </SplideSlide>);
              })}
            </Splide>
    );
}