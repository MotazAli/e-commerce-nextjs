import { useRouter } from 'next/router';
import CollectionItem from '../../../../../components/collectionItem';
import styles from '../../../../../styles/Collections.module.css';



export async function getStaticPaths(){
    return {
        paths:[
            {params : {slug: "men" ,id: "gi"}},
            {params : {slug: "men" ,id: "shorts" }},
            {params : {slug: "men" ,id: "accessores" }},
            {params : {slug: "women" ,id: "gi"}},
            {params : {slug: "women" ,id: "shorts" }},
            {params : {slug: "women" ,id: "accessores" }},
            {params : {slug: "kids" ,id: "gi"}},
            {params : {slug: "kids" ,id: "shorts" }},
            {params : {slug: "kids" ,id: "accessores" }},
        ],
        fallback:false
    }
}


export async function getStaticProps(contex){
    return {
        props : { 
            slug: contex.params.slug,
            id: contex.params.id
        }
    }
}




export default function Collections({slug,id}) {

    const router = useRouter();

    const items = [
        {id:1,title:'Gi white',price:99.9, srcImg:'/image1.jpg'},
        {id:2,title:'Gi black',price:99.9, srcImg:'/image2.jpg'},
        {id:3,title:'Gi blue',price:99.9, srcImg:'/image1.jpg'},
    ];


    const onclickItemHandler = (event,productId) => {
        router.push(`/category/${slug}/collection/${id}/products/${productId}`);
    }

    return (

<div style={{display: "contents"}}>



        <div className={styles.productFilter}>
            <h1>{id}</h1>

            <div className={styles.sort}>

                <div className={styles.collectionSort}>
                    <label>Filter by:</label>
                    <select>
                    <option value="/">All {id}</option>
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
                    <CollectionItem onClickHandler={onclickItemHandler} key={item.id} item={item} />
                );
            })}

            



  

        </div>
</div>
    );
}