//css
import styles from './styles.module.css'

//logo
import Logo from '../../assets/logoServer.png'

export default function Home(){
    return(
        <section className={styles.container}>
        <div className={styles.logo}>
            <img src={Logo} alt='logo' width={'300rem'}/>
        </div>

        <div className={styles.text1}>
            <h1>Explore um mundo fragmentado de sua realidade com</h1>
            <h1>Diversos desafios, missões e uma super aventura</h1>

                <button>Conheça o Oli Verse!</button>
        </div>
    </section>
    )
}