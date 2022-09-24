import styles from '../styles/Home.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ImageSlider from '../components/ImageSlider';
import Image from 'next/image';
import ProdcutsSlider from '../components/productsSlider';




export default function Home() {

const images = [
  "v1663342514/sports/image1_f2dkyn.jpg",
  "v1663342294/sports/cld-sample-5.jpg",
  "v1663342293/sports/cld-sample-3.jpg",
];


const products = [
  { title: "gi", src: "v1663342514/sports/image1_f2dkyn.jpg"},
  { title: "gi", src: "v1663342294/sports/cld-sample-5.jpg"},
  { title: "gi", src: "v1663342293/sports/cld-sample-3.jpg"},
  { title: "gi", src: "v1663342514/sports/image1_f2dkyn.jpg"},
  { title: "gi", src: "v1663342514/sports/image1_f2dkyn.jpg"},
  { title: "gi", src: "v1663342514/sports/image1_f2dkyn.jpg"},
  { title: "gi", src: "v1663342293/sports/cld-sample-3.jpg"},
];


// const sliderOptions = {
//   // rewind: true,
//   width : 800,
//   fixedHeight:350,
//   gap   : '1rem',
//   autoplay:true
// };
 

  return (
    <div className="container">
        {/* <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <p className="description">
          All sports wear in one place
        </p>
        <code>we deliver quality</code>


        <ImageSlider srcImages={images} />



        <div className={styles.itemsContainer}>
          <h2><code>In Sale</code></h2>
          <br/>
          <div>
            <ProdcutsSlider products={products} />
          </div>

        </div>

        <div className={styles.itemsContainer}>
          <h2><code>New Arrival</code></h2>
          <br/>
          <div>
            <ProdcutsSlider products={products} />
          </div>

        </div>


        <div className={styles.itemsContainer}>
          <h2><code>Top Items</code></h2>
          <br/>
          <div>
            <ProdcutsSlider products={products} />
          </div>

        </div>
        
        
        {/* <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
    </div>
  )
}
