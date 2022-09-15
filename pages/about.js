
import styles from '../styles/About.module.css'

const About = ()=>{
    return (


        <div className="container">
             <div className={styles.aboutsection}>
                <h1>IJJC Academy</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 >Our Team</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                    <img src="/w3images/team1.jpg" alt="Jane" />
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p className={styles.title}>CEO  Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                    <img src="/w3images/team1.jpg" alt="Jane" />
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p className={styles.title}>CEO  Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                    </div>
                </div>


                <div className={styles.column}>
                    <div className={styles.card}>
                    <img src="/w3images/team1.jpg" alt="Jane" />
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p className={styles.title}>CEO  Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                    </div>
                </div>

                
            </div>
        </div>



       
    )
}


export default About;