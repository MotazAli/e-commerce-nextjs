import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CategoryItem from '../../../components/categoryItem';
import styles from '../../../styles/Category.module.css'



export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: "men".toString() } },
        { params: { slug: "women".toString() } },
        { params: { slug: "kids".toString() } }
      ],
      fallback: false
    }
  }


export async function getStaticProps (context){

    const {slug} = context.params;
    return {
        props : { slug : slug.toString()}
    }
}




const Category = ({slug}) =>{

    const router = useRouter();
    const categories = [
        {id:1 , name:"gi",srcImg:"/image1.jpg"},
        {id:2 , name:"shorts",srcImg:"/image2.jpg"},
        {id:3 , name:"accessores",srcImg:"/image1.jpg"}
    ];

    // useEffect(() => {
    //     console.log(slug);
    // },[]);

    const onclickItemHandler = (event,name) => {
        //console.log(slug);
        router.push(`/category/${slug}/collections/${name}`);
    }



    return (
         <div className={styles.container}>

            <h1>{slug}</h1>

            { categories.map((category,index)=>{
                return <CategoryItem onClickHandler={onclickItemHandler} key={category.id} category={category} />
             }) }

        </div> 
    );
}

export default Category;