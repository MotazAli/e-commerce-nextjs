import Image from 'next/image';
import styles from '../styles/Cart.module.css'

const Cart= () => {
    return (
        <div className={styles.container} >
            <div className={styles.shoppingCart}>
  {/* <!-- Title --> */}
  <div className={styles.title}>
    Shopping Cart
  </div>
 
  {/* <!-- Product #1 --> */}
  <div className={styles.item}>
    <div className={styles.buttons}>
      <span className={styles.deleteButton}><i class="fa fa-trash"></i></span>
      {/* <span className={styles.likeButton}></span> */}
    </div>
 
    <div className={styles.image}>
      <Image layout='responsive' width="100px" height="100px" src="/image1.jpg" alt="" />
    </div>
 
    <div className={styles.description}>
      <span>Common Projects</span>
      <span>Bball High</span>
      <span>White</span>
    </div>
 
    <div className={styles.quantity}>
      <button className={styles.plusButton} type="button" name="button">
      <i class="fa fa-plus"></i>
        {/* <img src="plus.svg" alt="" /> */}
      </button>
      <input type="text" name="name" value="1"/>
      <button className={styles.minusButton} type="button" name="button">
        {/* <img src="minus.svg" alt="" /> */}
        <i class="fa fa-minus"></i>
      </button>
    </div>
 
    <div className={styles.totalPrice}>$549</div>
  </div>
 
  {/* <!-- Product #2 --> */}
  <div className={styles.item}>
    <div className={styles.buttons}>
      <span className={styles.deleteButton}><i class="fa fa-trash"></i></span>
      {/* <span className={styles.likeButton}></span> */}
    </div>
 
    <div className={styles.image}>
      <Image layout='responsive' width="100px" height="100px" src="/image1.jpg" alt="" />
    </div>
 
    <div className={styles.description}>
      <span>Common Projects</span>
      <span>Bball High</span>
      <span>White</span>
    </div>
 
    <div className={styles.quantity}>
      <button className={styles.plusButton} type="button" name="button">
      <i class="fa fa-plus"></i>
        {/* <img src="plus.svg" alt="" /> */}
      </button>
      <input type="text" name="name" value="1"/>
      <button className={styles.minusButton} type="button" name="button">
        {/* <img src="minus.svg" alt="" /> */}
        <i class="fa fa-minus"></i>
      </button>
    </div>
 
    <div className={styles.totalPrice}>$549</div>
  </div>
 
  
</div>
        </div>
    );
}


export default Cart;