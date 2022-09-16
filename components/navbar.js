import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'

const Navbar = ()=>{
  const [isChecked,setIsChecked] = useState(false);

  const handleCheckedMenu = (event) => setIsChecked(event.target.checked);

  const handleOnClickMenuItem = () => setIsChecked(false);



    return (
        <nav className={styles.navbar}>
     {/* <!-- LOGO --> */}
     <div className={styles.logo}>COBRA<span>.</span></div>
     <div className={styles.rightbar}>
      {/* <!-- NAVIGATION MENU --> */}
     <ul className={styles.navlinks}>
       {/* <!-- USING CHECKBOX HACK --> */}
       <input checked={isChecked} onChange={handleCheckedMenu} className={styles.checkbox} type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
       
       {/* <!-- NAVIGATION MENUS --> */}
       <div className={styles.menu}>
         <li> <Link href="/"><a onClick={handleOnClickMenuItem}>Home</a></Link></li>
         <li className={styles.services}>
            <Link href="/store"><a onClick={handleOnClickMenuItem}>Store</a></Link>
           {/* <!-- DROPDOWN MENU --> */}
           <ul className={styles.dropdown}>
             <li><Link href="/men"><a onClick={handleOnClickMenuItem}>Men</a></Link></li>
             <li><Link href="/women"><a onClick={handleOnClickMenuItem}>Women</a></Link></li>
             <li><Link href="/kids"><a onClick={handleOnClickMenuItem}>Kids</a></Link></li>
           </ul>
         </li>
         <li><Link href="/about"><a onClick={handleOnClickMenuItem}>About</a></Link></li>
         {/* <li><Link href="/about"><a>About</a></Link></li> */}
         <li><Link href="/login"><a onClick={handleOnClickMenuItem}>Login</a></Link></li>
         <li className={styles.services}>
            <Link href="/store"><a onClick={handleOnClickMenuItem}>User</a></Link>
           {/* <!-- DROPDOWN MENU --> */}
           <ul className={styles.dropdown}>
             <li><Link href="/men"><a onClick={handleOnClickMenuItem}>Account</a></Link></li>
             <li><Link href="/women"><a onClick={handleOnClickMenuItem}>Log out</a></Link></li>
           </ul>
         </li>
       </div>
     </ul>
     {/* <label for="checkbox_toggle" className={styles.hamburger}><i class="fa fa-shopping-cart"></i></label> */}
     <button className={styles.cartbtn}>
      <i class="fa fa-shopping-cart"></i>
      <span>10</span>
     </button>
     </div>
     
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