import { useRouter } from "next/router";
import { useEffect } from "react";

const Notfound = ()=>{

    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => {
            router.push('/');
        }, 5000);
    },[]);


    return (
        <div className="container">
            <h1 className="title">
            Ops!
            </h1>

            <p className="description">
            this page not found.
            </p>
        </div>
    );
}

export default Notfound;