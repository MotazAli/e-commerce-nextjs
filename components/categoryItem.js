import Image from 'next/image';
import styles from '../styles/Category.module.css'


const CategoryItem = ({category,onClickHandler})=>{
    return (
        <div onClick={(e) => onClickHandler(e,category.name)} className={styles.column}>
            <h3>{category.name}</h3>
            <Image src={category.srcImg} height="190px" width="200px" layout="responsive" objectFit="fill"/>
        </div>
    );
}

export default CategoryItem;