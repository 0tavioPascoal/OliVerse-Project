//css
import styles from './styles.module.css'

//logo
import Logo from '../../assets/logoServer.png'

//videos
import trailerPrincipal from '../../assets/minecraftTrailer.mp4'

import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
    //Da play no trailer quando chegar em pelo menos 40% da section
    const [isVideoReady, setIsVideoReady] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && isVideoReady) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        }, options);

        observer.observe(document.getElementById('trailerSection'));

        return () => {
            observer.disconnect();
        };
    }, [isVideoReady]);

    return (
        <div className='home'>
            <section className={styles.headerSection} id='headerSection'>
                <div className={styles.headerContainer}>
                    <div className={styles.logoContainer}>
                        <img src={Logo} alt='logo' width={'250rem'} />
                    </div>
                    <h1>Explore um mundo fragmentado da sua realidade com diversos desafios, missões e uma super aventura!</h1>
                    <div className={styles.btn}><a href="">Conheça o Oli Verse!</a></div>
                </div>
            </section>

            <section className={styles.trailerSection} id='trailerSection'>
            <div className={styles.trailerContainer}>
                    <div className={styles.trailerVideo}>
                        <video src={trailerPrincipal} onLoadedData={() => setIsVideoReady(true)} ref={videoRef} controls loop>
                        </video>
                    </div>

                    <div className={styles.trailerDescription}>
                        <p>
                           orem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla dui in dignissim commodo.
                           Sed cursus, neque quis cursus pulvinar, libero metus porttitor augue, ac luctus dolor tellus
                           sed sem. 
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
