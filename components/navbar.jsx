import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import UserContext from '../src/storage';
import styles from '../styles/Navbar.module.css'

const Navbar = ()=>{

  const router = useRouter();
  const [user,setUser] = useContext(UserContext);
  const [isChecked,setIsChecked] = useState(false);
  const [numberOfItems,setNumberOfItems] = useState(0);

  const handleCheckedMenu = (event) => setIsChecked(event.target.checked);

  const handleOnClickMenuItem = () => setIsChecked(false);

  const handleOnClickLogout =() => {
    setUser(null);
    handleOnClickMenuItem();
    router.push('/');
  }

  const loginLayout = () => {
    return (
      <li><Link href="/login"><a onClick={handleOnClickMenuItem}>Login</a></Link></li>
    );
  }


  const UserLayout = () => {
    return (
      <li className={styles.services}>
            <Link href="/account"><a onClick={handleOnClickMenuItem}>{user.name}</a></Link>
           {/* <!-- DROPDOWN MENU --> */}
           <ul className={styles.dropdown}>
             <Link href="/account"><li><a onClick={handleOnClickMenuItem}>Account</a></li></Link>
             <li><a onClick={handleOnClickLogout}>Log out</a></li>
           </ul>
      </li>
    );
  }


    return (
        <nav className={styles.navbar}>
     {/* <!-- LOGO --> */}
     <div style={{marginLeft:"2%"}} className="cobraKimonosLogoHolder">
        <h1 style={{fontSize:"25px"}} className="cobraLogo">
            COBRA   
        </h1>
        {/* <span style={{color:"red"}}>.</span> */}
        <span className="dotLogo"></span>
        <span style={{fontSize:"14px"}} className="KimonosLogo">Kimonos</span>
    </div>
     {/* <div className="logo">COBRA<span>.</span></div> */}
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
             <Link href='/category/men'><li><a onClick={handleOnClickMenuItem}>Men</a></li></Link>
             <Link href='/category/women'><li><a onClick={handleOnClickMenuItem}>Women</a></li></Link>
             <Link href='/category/kids'><li><a onClick={handleOnClickMenuItem}>Kids</a></li></Link>
           </ul>
         </li>
         <li><Link href="/about"><a onClick={handleOnClickMenuItem}>About</a></Link></li>
         {/* <li><Link href="/about"><a>About</a></Link></li> */}

         { (user != null)? UserLayout() : loginLayout() }

         {/* <li><Link href="/login"><a onClick={handleOnClickMenuItem}>Login</a></Link></li>
         <li className={styles.services}>
            <Link href="/store"><a onClick={handleOnClickMenuItem}>User</a></Link>
           <ul className={styles.dropdown}>
             <li><Link href="/men"><a onClick={handleOnClickMenuItem}>Account</a></Link></li>
             <li><Link href="/women"><a onClick={handleOnClickMenuItem}>Log out</a></Link></li>
           </ul>
         </li> */}


       </div>
     </ul>
     {/* <label for="checkbox_toggle" className={styles.hamburger}><i class="fa fa-shopping-cart"></i></label> */}
     <button onClick={() => router.push('/cart') } className={styles.cartbtn}>
      <i class="fa fa-shopping-cart"></i>
      <span> {(numberOfItems > 0)?  numberOfItems : null} </span>
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