import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import styles from '../styles/Login.module.css'
import UserContext from '../src/storage';

const Login = () => {

    const router = useRouter();
    const [_,setUser] = useContext(UserContext);
    const [isChecked,setIsChecked] = useState(true);


    const onChangeHandler = (e) =>{
        //e.preventDefault();
        setIsChecked(!isChecked);
    }

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
                    <label>Password: </label>   
                    <input className={styles.filed} type="password" placeholder="Enter Password" name="password" required/>  
                    
                    <input type="checkbox" value={isChecked}  onChange={onChangeHandler} /> Remember me 
                    <button className={styles.button} type="submit">Login</button>   
                    <label className={styles.newline}>
                        <Link href="/forgotpassword">
                        <a>Forgot password?  </a>
                        </Link>
                    </label> 
                    <label className={styles.newline}>
                        <Link href="/signup">
                        <a>A new member! - Sign Up  </a>
                        </Link>
                    </label> 
                    

                    {/* <button type="button" className={classNames(styles.button,styles.cancelbtn)}> Cancel</button>   
                        */}
                </div>   
            </form>
       
    );
}

export default Login;