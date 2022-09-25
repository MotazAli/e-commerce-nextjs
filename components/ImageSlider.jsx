import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const ImageSlider = ({srcImages}) => {
    const sliderOptions = {
        // rewind: true,
        width : 800,
        Height:350,
        //fixedHeight:350,
        gap   : '1rem',
        autoplay:true
      };

      const imageLoader = ({ src, width, quality }) => {
        // return `https://res.cloudinary.com/dfw7q7qe2/image/upload/${src}`;
        return  `${process.env.NEXT_PUBLIC_IMAGE_HOSTING_URL}/${src}`;
      }

      return (
        <Splide options={sliderOptions} aria-label="My Favorite Images">
            {srcImages.map((src,index) => {
                return (<SplideSlide key={index} >
                            <Image loading="lazy" loader={imageLoader} src={src} alt={`image`+ index}  width={800} height={350}/>
                        </SplideSlide>);
            })}
        </Splide>
      );

}

export default ImageSlider;