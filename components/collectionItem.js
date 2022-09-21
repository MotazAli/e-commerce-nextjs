import Image from "next/image";
import styles from '../styles/Collections.module.css';

export default function CollectionItem({item}){
    return (
        <div className={styles.productCard}>
                <div className={styles.productImage}>
                <Image src={item.srcImg} height="100%" width="100%" layout="responsive" objectFit="cover"/>
                </div>
                <div className={styles.productInfo}>
                <h5>{item.title}</h5>
                <h6>${item.price}</h6>
                <button type='button' className={styles.button} ><i class="fa fa-shopping-cart" > Add</i></button>
                </div>
            </div>
    );
}