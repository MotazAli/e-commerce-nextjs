import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = ()=>{

    return (
        <nav className={styles.navbar}>
     {/* <!-- LOGO --> */}
     <div className={styles.logo}>Cobra.</div>
     {/* <!-- NAVIGATION MENU --> */}
     <ul className={styles.navlinks}>
       {/* <!-- USING CHECKBOX HACK --> */}
       <input className={styles.checkbox} type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div className={styles.menu}>
         <li> <Link href="/"><a>Home</a></Link></li>
         <li className={styles.services}>
            <Link href="/store"><a>Store</a></Link>
           {/* <!-- DROPDOWN MENU --> */}
           <ul className={styles.dropdown}>
             <li><Link href="/men"><a>Men</a></Link></li>
             <li><Link href="/women"><a>Women</a></Link></li>
             <li><Link href="/kids"><a>Kids</a></Link></li>
           </ul>
         </li>
         <li><Link href="/ijjc"><a>IJJC</a></Link></li>
         <li><Link href="/about"><a>About</a></Link></li>
         <li><Link href="/login"><a>Login</a></Link></li>
       </div>
     </ul>
   </nav>
    );
}

export default Navbar;





// import { useState } from 'react';
// import classNames from "classnames"
// import styles from '../styles/Navbar.module.css'

// const Navbar = ()=>{

//     const [isResponsive , setIsResponsive] = useState(false);
   
//     return (
//         <div className={styles.headerContainer}>
//             <div className={styles.logo}>
//                 <img src="https://via.placeholder.com/50"/>
//             </div>

//             <div className={classNames(styles.topnav, { [styles.responsive] : isResponsive }  )} id={styles.myTopnav} >
            
//                 <a href="#home" className={styles.active}>Home</a>
//                 <a href="#shop">Shop</a>
//                 <a href="#ijjc">IJJC</a>
//                 <a href="#about">About</a>
//                 <a href="#login"> Login <i className="fa fa-fw fa-user"></i></a>
//                 {/* <a href="#login"><i className="fa fa-fw fa-user"></i> Login</a>
//                 <a className={styles.icon} 
//                 onClick={()=> setIsResponsive(!isResponsive) }>
//                     <i className="fa fa-bars"></i>
//                 </a> */}
//             </div> 
//             <div className={classNames( { [styles.responsive] : isResponsive }  )}>
//                 <a className={styles.icon} 
//                 onClick={()=> setIsResponsive(!isResponsive) }>
//                     <i className="fa fa-bars"></i>
//                 </a>
//             </div>
//         </div>
         
//     )
// }

// export default Navbar;