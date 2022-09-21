
import Image from 'next/image';
import CollectionItem from '../../../components/collectionItem';
import styles from '../../../styles/Collections.module.css';


export default function Collections() {

    const items = [
        {id:1,title:'Gi white',price:99.9, srcImg:'/image1.jpg'},
        {id:2,title:'Gi black',price:99.9, srcImg:'/image2.jpg'},
        {id:3,title:'Gi blue',price:99.9, srcImg:'/image1.jpg'},
    ];



    return (

<div style={{display: "contents"}}>



        <div className={styles.productFilter}>
            <h1>Jackets</h1>

            <div className={styles.sort}>

                <div className={styles.collectionSort}>
                    <label>Filter by:</label>
                    <select>
                    <option value="/">All Jackets</option>
                    </select>
                </div>

                <div className={styles.collectionSort}>
                    <label>Sort by:</label>
                    <select>
                    <option value="/">Featured</option>
                    </select>
                </div>

            </div>
        </div>



        <div className={styles.products}>

            { items.map((item , index) => {
                return (
                    <CollectionItem key={item.id} item={item} />
                );
            })}

            



  

        </div>
</div>
    );
}