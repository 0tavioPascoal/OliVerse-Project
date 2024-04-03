//css
import styles from './styles.module.css'

//logo
import Logo from '../../assets/logoServer.png'

//videos
import trailerPrincipal from '../../assets/minecraftTrailer.mp4'

import React from 'react';

export default function Home() {
    return (
        <div className='home'>
            <section className={styles.headerSection} id='headerSection'>
                <div className={styles.headerContainer}>
                    <div className={styles.logoContainer}>
                        <img src={Logo} alt='logo' width={'250rem'} />
                    </div>
                    <h1>Explore um mundo fragmentado da sua realidade com diversos desafios, missões e uma super aventura!</h1>
                    <div className={styles.btn}><a href="#trailer">Conheça o Oli Verse!</a></div>
                </div>
            </section>

            <section className={styles.trailerSection} id='trailerSection'>
                <div className={styles.trailerContainer}>
                    <div className={styles.trailerVideo} id='trailer'>
                        <video src={trailerPrincipal} controls autoPlay loop muted></video>
                    </div>

                    <div className={styles.trailerDescription}>
                        <p>
                            Em nosso servidor de RPG no Minecraft, você embarcará em uma jornada épica repleta de desafios e descobertas. 
                            Explore terras vastas, participe de missões emocionantes e forje alianças poderosas enquanto enfrenta as forças do mal.
                            Com classes distintas, sistemas de recompensas, e a promessa de construir seu próprio destino, prepare-se para uma 
                            experiência única de sobrevivência e aventura onde cada escolha molda o rumo da história. O destino de Oliverse está em suas mãos. 
                            <strong>Venha escrever sua própria lenda!</strong>
                        </p>

                        <div className={`${styles.btn} ${styles.btnJogueAgora}`}><a href="">Jogue Agora!</a></div>
                    </div>
                </div>
            </section>

            <hr />

            <section className={styles.featuresSection} id='featuresSection'>
                <div className={styles.featuresContainer}>
                    <div className={styles.featureLeft}>
                        <div className={styles.featureDescription}>
                            <h3>Lorem Impsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam omnis earum placeat, vel perspiciatis pariatur facilis, 
                                nesciunt odit, minima nisi at deserunt. Rerum maxime optio accusantium soluta veritatis ab.
                            </p>
                        </div>

                        <video src={trailerPrincipal} controls autoPlay loop muted></video>
                    </div>

                    <div className={styles.featureRight}>
                        <video src={trailerPrincipal} controls autoPlay loop muted></video>

                        <div className={styles.featureDescription}>
                            <h3>Lorem Impsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam omnis earum placeat, vel perspiciatis pariatur facilis, 
                                nesciunt odit, minima nisi at deserunt. Rerum maxime optio accusantium soluta veritatis ab.
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureLeft}>
                        <div className={styles.featureDescription}>
                            <h3>Lorem Impsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam omnis earum placeat, vel perspiciatis pariatur facilis, 
                                nesciunt odit, minima nisi at deserunt. Rerum maxime optio accusantium soluta veritatis ab.
                            </p>
                        </div>

                        <video src={trailerPrincipal} controls autoPlay loop muted></video>
                    </div>
                </div>
            </section>
        </div>
    )
}
