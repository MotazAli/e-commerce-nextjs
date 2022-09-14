import classNames from 'classnames';
import { useState } from 'react';
import styles from '../styles/Login.module.css'

const Login = () => {

    const [isChecked,setIsChecked] = useState(true);


    const onChangeHandler = (e) =>{
        //e.preventDefault();
        setIsChecked(!isChecked);
    }


    return (
        
            <form className={styles.form}>  
                <div className={styles.container}>   
                    <label>Email : </label>   
                    <input className={styles.filed} type="text" placeholder="__@__" name="email" required/>  
                    <label>Password : </label>   
                    <input className={styles.filed} type="password" placeholder="password" name="password" required/>  
                    
                    <input type="checkbox" value={isChecked}  onChange={onChangeHandler} /> Remember me 
                    <button className={styles.button} type="submit">Login</button>   
                    <label className={styles.newline}><a href="#">Forgot password? </a></label> 
                    <label className={styles.newline}><a href="#">A new member! - Sign Up  </a></label> 
                    

                    {/* <button type="button" className={classNames(styles.button,styles.cancelbtn)}> Cancel</button>   
                        */}
                </div>   
            </form>
       
    );
}

export default Login;