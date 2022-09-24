import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from '../../../../../../styles/Products.module.css';
import '@splidejs/react-splide/css';
import { useEffect, useRef } from 'react';

export async function getServerSideProps(contex){

    return {
        props:{productid:contex.params.productid}
    }
}


export default function Products({productid}){

    const mainRef = useRef();
    const thumbsRef = useRef();
    const images = [
        "v1663342514/sports/image1_f2dkyn.jpg",
        "v1663342294/sports/cld-sample-5.jpg",
        "v1663342293/sports/cld-sample-3.jpg"
      ];

    const colors = ["blue","red","green","yellow"];
    const sizes = ["A1","A2","A3","A4"];


    // const mainOptions = {
    //     type      : 'loop',
    //     perPage   : 2,
    //     perMove   : 1,
    //     gap       : '1rem',
    //     pagination: false,
        
    //     height    : '10rem',
    //   };

      const mainOptions = {
        // rewind: true,
        width : 800,
        fixedHeight:350,
        gap   : '1rem',
        autoplay:true
      };
  
      const thumbsOptions = {
        type        : 'slide',
        rewind      : true,
        // gap         : '1rem',
        gap: '1px',
        pagination  : false,
        fixedWidth  : 100,
        fixedHeight : 100,
        cover       : true,
        focus       : 'center',
        isNavigation: true,
      };


      const imageLoader = ({ src, width, quality }) => {
        // return `https://res.cloudinary.com/dfw7q7qe2/image/upload/${src}`;
        return  `${process.env.NEXT_PUBLIC_IMAGE_HOSTING_URL}/${src}`;
      }

      useEffect(()=> {
        if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
            mainRef.current.sync( thumbsRef.current.splide );
          }
      }, [])


      const renderThumbSlides = () => {
        return images.map((image,index) => {
            return <SplideSlide key={ index }>
                        <Image loading="lazy" loader={imageLoader} src={image} alt={`image`+ index}  width="100px" height="100%" layout='responsive' objectFit='fill' />
                    </SplideSlide>
        });
      }


      const renderMainSlides = () => {
        return images.map((src,index) => {
            return <SplideSlide>
                        <Image loading="lazy" loader={imageLoader} src={src} alt={`image`+ index}  width={800} height={900}/>
                    </SplideSlide>
        });
      }

    return (
        <div className={styles.container}>

            
            <div className={styles.leftSide} >
                <Splide
                    options={ mainOptions }
                    ref={ mainRef }
                    aria-labelledby="thumbnail-slider-example" >
                    { renderMainSlides() }
                </Splide>

                <Splide
                    options={ thumbsOptions }
                    ref={ thumbsRef }
                    aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel">
                    { renderThumbSlides() }
                </Splide>
            </div>
            <div className={styles.rightSide} >
            <h1>Product Name {productid}</h1>

            <p>This is description section, you can put any thing here that describe your product and what is offering </p>
            <h5>Colors</h5>
            <div className={styles.colorContainer}>
                {colors.map((color,index) => {
                    return (<div key={index} style={{backgroundColor:`${color}`}} className={styles.colorItem}></div>);
                })}
                {/* <div className={styles.colorItem}></div>
                <div className={styles.colorItem}></div>
                <div className={styles.colorItem}></div>
                <div className={styles.colorItem}></div> */}
            </div>
            
            <h5>Size</h5>
            <div className={styles.sizeContainer}>
                {sizes.map((size,index) =>{
                    return (<div key={index} className={styles.sizeItem}>{size}</div>);
                })
                }
                {/* <div className={styles.sizeItem}>A1</div>
                <div className={styles.sizeItem}>A2</div>
                <div className={styles.sizeItem}>A3</div>
                <div className={styles.sizeItem}>A4</div> */}
            </div>

            <h4>Price: $16.80</h4>
            <br/><br/>
            <button  type='button' className={styles.button} ><i class="fa fa-shopping-cart" > Add</i></button>

            </div>
            
        </div> 
    );
} 