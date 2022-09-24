import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import styles from '../styles/Login.module.css'
import UserContext from '../src/storage';

const ForgotPassword = () => {

    const router = useRouter();
    const [_,setUser] = useContext(UserContext);
    const [isChecked,setIsChecked] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({id:12,name:"Motaz Abdelhafez"});
        router.push('/');
    }


    return (
        
            <form className={styles.form} onSubmit={handleSubmit}>  
                <div className={styles.container}>   
                    <label>Email Account: </label>   
                    <input className={styles.filed} type="text" placeholder="_@__.com" name="email" required/>  
                    <button className={styles.button} type="submit">Reset Password</button>   
                    <label className={styles.newline}>
                        <Link href="/login">
                        <a>Already a member! - login  </a>
                        </Link>
                    </label> 
                    

                    {/* <button type="button" className={classNames(styles.button,styles.cancelbtn)}> Cancel</button>   
                        */}
                </div>   
            </form>
       
    );
}

export default ForgotPassword;