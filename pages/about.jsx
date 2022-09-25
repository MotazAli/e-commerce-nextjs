import Image from 'next/image'
import classNames from 'classnames';
import styles from '../styles/About.module.css'

const About = ()=>{
    return (



        
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

<br/>

<h2 >Meet Our Team</h2>

<div className={styles.teamContainer}>


<div className={styles.card}>
<Image className={styles.img} loading="lazy"  height="100%" width="100%" layout="responsive" objectFit="fill" src="/AhmedBahgat.jpg"  alt="Ahmed Bahgat" />
  <div className={styles.container}>
    <h4><b>Ahmed Bahgat</b></h4>
    <p>CEO Founder of COBRA.Kimonos and IJJC academy</p>
  </div>
</div>

<div className={styles.card}>
<Image className={styles.img} loading="lazy" height="100%" width="100%" layout="responsive" objectFit="fill"  src="/Fouzi.jpg"  alt="Fouzi Mezouari" />
  <div className={styles.container}>
    <h4><b>Fouzi Mezouari</b></h4>
    <p>IJJC Professor Black belt 3rd degree - Delariva Paris.</p>
    {/* <p></p> */}
  </div>
</div>


</div>


<br/>
<br/>

<h2 >Contact Us</h2>

<div className={styles.contactContainer} >
<div className={styles.contactContent} >
<div className={styles.leftSide}>
        <div className={styles.details}>
          <i class="fa fa-map-marker"></i>
          <div className={styles.topic}>Address</div>
          <div className={styles.textOne}>Yasmin 4, Ja'far ibn Abi Talib - New Cairo 1</div>
          {/* <div className={styles.textTwo}></div> */}
        </div>
        <div className={styles.details}>
          <i class="fa fa-phone"></i>  &nbsp;
          <a href="https://wa.me/201114491444"><i class="fa fa-whatsapp"></i></a>

          
          <div className={styles.topic}>Phone</div>
          <div className={styles.textOne}>
            <a href="tel:201114491444">+201114491444</a>
            
            </div>
          <div className={styles.textTwo}>
            
            
          </div>
        </div>
        <div className={styles.details}>
          <i class="fa fa-envelope"></i>
          <div className={styles.topic}>Email</div>
          <div className={styles.textOne}>ahmed@gmail.com</div>
          {/* <div className={styles.textTwo}>info.codinglab@gmail.com</div> */}
        </div>
      </div>


      <div className={styles.rightSide}>
        <div className={styles.topicText}>Send a message</div>
        <p>If you have any question or any types of quries related to your order, you can send me message here. It's our pleasure to help you.</p>
      <form action="#">
        <div className={styles.inputBox}>
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className={classNames(styles.inputBox,styles.messageBox)}>
            <textarea placeholder='Your message...'  />
        </div>
        <div className={styles.button}>
          <input type="button" value="Send Now"/>
        </div>
      </form>
    </div>
</div>
</div>




{/* <div className={styles.column}>
        <div className={styles.card}>
        <Image loading="lazy" height="100%" width="100%" layout="responsive" objectFit="fill"  src="/Fouzi.jpg"  alt="Fouzi Mezouari" />
        <div className={styles.container}>
            <h2>Fouzi Mezouari</h2>
            <p className={styles.title}>IJJC Professor</p>
            <p>Black belt 3rd degree - Delariva Paris.</p>
            <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
    </div> */}

    {/* <div className={styles.column}>
        <div className={styles.card}>
        <Image loading="lazy"  height="100%" width="100%" layout="responsive" objectFit="fill" src="/AhmedBahgat.jpg"  alt="Ahmed Bahgat" />
        <div className={styles.container}>
            <h2>Ahmed Bahgat</h2>
            <p className={styles.title}>CEO Founder</p>
            <p>Founder of COBRA. sports wear and IJJC academy</p>
            <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
    </div> */}

</div>



        

        



       
    )
}


export default About;