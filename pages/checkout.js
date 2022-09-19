import classNames from 'classnames';
import styles from '../styles/Checkout.module.css';

const Checkout = () =>{
    return (
        <div className="container">
    <div className={styles.card}>
        <div className={styles.paymentDetails}>
            <h3>Payment Details</h3>
            <p>Complete your purchase by providing your payment details.</p>
        </div>
        <div className={styles.inputText}>
            <input type="text" placeholder="luke@skywalker.com"/>
            <span>Email</span>
        </div>
        <div className={styles.inputText}>
            <input type="text"  placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" />
            <span>Card Details</span>
        </div>
        <div className={styles.inputTextCvv}>
            <input type="text" placeholder="mm/yyyy" data-slots="my"/>
            
        </div>
         <div className={classNames(styles.inputTextCvv, styles.cvv)}>
            <input type="text" placeholder="000" data-slots="0" data-accept="\d" size="3" />
            
        </div>
        <div className={styles.inputText}>
            <input type="text" placeholder="Username"/>
            <span>Card Holder name</span>
        </div>
        <div className={styles.billing}>
            <span>Billing Address</span>
            <select>
                <option>Select Country</option>
                <option>United States</option>
                <option>India</option>
                <option>England</option>
                <option>Egypt</option>
                <option>France</option>
                <option>Germany</option>
                <option>Japan</option>
                <option>China</option>
                <option>Italy</option>
                <option>Russia</option>
            </select>
            <div className={styles.zipState}>
                <div className={styles.zip}>
                    <input type="text" placeholder="ZIP"/>
                </div>
                <div className={styles.state}>
                    <select>
                           <option>Select State</option>
                           <option>New York</option>
                           <option>New Delhi</option>
                           <option>London</option>
                           <option>Paris</option>
                           <option>Berlin</option>
                           <option>Tokyo</option>
                           <option>Bejing</option>
                           <option>Rome</option>
                           <option>Mosco</option>
                    </select>
                </div>
                
            </div>
        </div>
        <div className={styles.inputText}>
            <input type="text" placeholder="Address"/>
            <span>Full Address</span>
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
            <button>Pay</button>
        </div>
        <div className={styles.secure}>
            <i class="fa fa-lock"></i>
            <p> Payments are secured and encrypted</p>
        </div>
        <div className={styles.last}> 
            <p>Powered by Paymob</p>
            <a href="#"> Terms </a>
            <a href="#"> Privacy </a>
        </div>
        
    </div>
    
</div>
    );
}

export default Checkout;