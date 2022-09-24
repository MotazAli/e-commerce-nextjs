import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Cart.module.css'

const Cart= () => {

  const router = useRouter();



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


<div >
    <div className={styles.card}>
        <div className={styles.paymentDetails}>
            <h3>Summary Payment</h3>
            <p>You will complete your purchase by checkout and providing your payment details.</p>
        </div>
        
        <div className={styles.inputText}>
            <input type="text" placeholder="BLACKWEDNESDAY"/>
            <span>Discount code</span>
        </div>
        <div className={styles.summary}>
            <div className={styles.textData}>
                <p>Subtotal</p>
                <p>Discount</p>
                <p>VAT(20%)</p>
                <h5>Total</h5>
            </div>
            <div className={styles.numericalData}>
                <p>$19.00</p>
                <p>$5.00</p>
                <p>$2.80</p>
                <h5>$16.80</h5>
            </div>
        </div>
        <div className={styles.pay}>
            <button onClick={() => router.push('/checkout') }>Checkout</button>
        </div>
        
        
        
    </div>
    
</div>




        </div>
    );
}


export default Cart;