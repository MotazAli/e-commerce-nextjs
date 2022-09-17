import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = ()=>{
    return (



        <div>
            <div className="container">

<div className={styles.aboutsection}>

<div  className="cobraKimonosLogoHolder">
        <h1  className="cobraLogo">
            COBRA   
        </h1>
        {/* <span style={{color:"red"}}>.</span> */}
        <span className="dotLogo"></span>
        <span className="KimonosLogo">Kimonos</span>
    </div>
    {/* <h1 className="logoFontColor">
        COBRA<span>.</span>
        
    </h1>

    <span className="KimonosLogo">Kimonos</span> */}
    
    <p>We Deliver Quality</p>
    <p>
    COBRA. was established in 2009 with the goal of addressing the need for high quality Jiu Jitsu products at affordable prices.

Founded by Gareth Dummer and Lee Jones in the heart of South Wales, Tatami now has a diverse and driven team committed to expanding the sport worldwide. Gareth, himself a Brazilian Jiu Jitsu black belt, had spent years teaching the sport in lower income areas and local communities and found it increasingly difficult to find high quality products that his students could afford.

That is where Tatami Fightwear came into the equation. From day one, we've worked tirelessly to develop innovative products and support the growth of the sport and make it accessible to a wider-ranging audience.

Our aim is to expose combat sports to more people worldwide and uphold the values of BJJ, and this drives our work with associations such as the Royal Marines REORG foundation that ties into our mission statement to make the sport accessible to all. 

After 13 years of continuous development and innovation, our range now includes performance and lifestyle gear, from Gi's to rash guards to leisurewear and everything in between, to showcase people on their Jiu Jitsu journey. 

As well as having a loyal and growing customer base, we are proud to support some of the world's best Jiu Jitsu athletes and pioneers, such as JT Torres, Josh Hinger and Michelle Nicolini, and also sponsor some of the next generation of up-and-coming stars that buy into the Tatami Fightwear mantra.
    </p>
</div>

<br></br>

 <div className={styles.aboutsection}>
    <h1>IJJC Academy</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>

</div>


<div className={styles.container}>
    <div className={styles.column}>
        <div className={styles.card}>
        <Image loading="lazy" height="100%" width="100%" layout="responsive" objectFit="fill"  src="/Fouzi.jpg"  alt="Fouzi Mezouari" />
        <div className={styles.container}>
            <h2>Fouzi Mezouari</h2>
            <p className={styles.title}>IJJC Professor</p>
            <p>Black belt 3rd degree - Delariva Paris.</p>
            {/* <p>jane@example.com</p> */}
            <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
    </div>

    <div className={styles.column}>
        <div className={styles.card}>
        <Image loading="lazy"  height="100%" width="100%" layout="responsive" objectFit="fill" src="/AhmedBahgat.jpg"  alt="Ahmed Bahgat" />
        <div className={styles.container}>
            <h2>Ahmed Bahgat</h2>
            <p className={styles.title}>CEO Founder</p>
            <p>Founder of COBRA. sports wear & IJJC academy</p>
            {/* <p>jane@example.com</p> */}
            <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
    </div>
    
</div>
        </div>

        



       
    )
}


export default About;