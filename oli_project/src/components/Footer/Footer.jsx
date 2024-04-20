import React from 'react'
import {NavLink} from 'react-router-dom'

//icons
import logoFooter from '../../assets/footer-logo.png'
import youtube from '../../assets/footer-youtube.png'
import twitter from '../../assets/footer-twitter.png'
import tiktok from '../../assets/footer-tiktok.png'
import insta from '../../assets/footer-instagram.png'
import discord from '../../assets/footer-discord.png'

//css
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerInfo}>
                    <div className={styles.logo}>
                        <img src={logoFooter} alt="logo" width={'150rem'} className={styles.logo} />
                    </div>
                    <div className={styles.scialContainer}>
                        <div className={styles.socialLinks}>
                            <a href=""><img src={youtube} alt="logo" width={'25rem'} /></a>
                            <a href=""><img src={twitter} alt="logo" width={'25rem'} /></a>
                            <a href=""><img src={tiktok} alt="logo" width={'25rem'} /></a>
                            <a href=""><img src={insta} alt="logo" width={'25rem'} /></a>
                            <a href=""><img src={discord} alt="logo" width={'25rem'} /></a>
                        </div>

                        <div className={styles.footerDescription}>
                            <h2>It is a long established fact that a reader will be distracted by<br />
                                the readable content of a page when looking at its layout. </h2>
                            <h4><strong>Email: </strong>oliverse@support.com</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <NavLink to='/contact'>Contato</NavLink>
                    <NavLink to='/conditions'>Termos e Condições</NavLink>
                    <NavLink to='/reportbug'>Rerportar Bugs</NavLink>
                </div>
            </div>

            <hr />

            <div className={styles.copyrightDescription}>
                <p>OliVerse ©2024 - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer