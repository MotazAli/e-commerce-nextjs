import classNames from 'classnames';
import styles from '../styles/Footer.module.css';


const Footer = ()=>{
    return (
        <footer>
            &copy; COBRA.Kimonos 2022 design by Aion 

            
            <a href="#" style={{marginLeft: "20px"}} className="fa fa-facebook"></a>
            <a href="#" style={{marginLeft: "10px"}} className="fa fa-instagram"></a>

        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Aion {' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a> */}
      </footer>
    )
}

export default Footer;