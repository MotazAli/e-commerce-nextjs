import { useRouter } from 'next/router';
import CategoryItem from '../../components/categoryItem';
import styles from '../../styles/Category.module.css'



export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: 'men' } },
        { params: { slug: 'women' } },
        { params: { slug: 'kids' } }
      ],
      fallback: false
    }
  }


export async function getStaticProps (context){

    const {slug} = context.params;
    return {
        props : { slug : slug}
    }
}




const Category = ({slug}) =>{

    //const router = useRouter();
    //const {slug} =  router.query;
    const categories = [
        {id:1 , name:"Gi",srcImg:"/image1.jpg"},
        {id:2 , name:"Shorts",srcImg:"/image2.jpg"},
        {id:3 , name:"Accssores",srcImg:"/image1.jpg"}
    ];



    return (
         <div className={styles.container}>

            <h1>{slug}</h1>

            { categories.map((category,index)=>{
                return <CategoryItem category={category} />
             }) }

        </div> 
    );
}

export default Category;