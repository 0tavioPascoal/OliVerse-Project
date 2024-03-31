import React from 'react'

//logo 
import logo2 from '../../assets/logoServer.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import tiktok from '../../assets/ttk.png'
import insta from '../../assets/insta.png'
import discord from '../../assets/discord.png'

//css
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logo}>
            <img src={logo2} alt="logo" width={'150rem'} className={styles.logo}/>
        </div>

    <div className={styles.sociais}>
    <img src={youtube} alt="logo" width={'25rem'}/>
    <img src={twitter} alt="logo" width={'25rem'}/>
    <img src={tiktok} alt="logo" width={'25rem'} />
    <img src={insta} alt="logo" width={'25rem'} />
    <img src={discord} alt="logo" width={'25rem'} />
    </div>

    <div className={styles.text}>
        <h3 >It is a long established fact that a reader will be distracted by<br/>
         the readable content of a page when looking at its layout. </h3>
        <h4>Email: oliverse@support.com</h4>
    </div>
    <div className={styles.help}>
        <h2>contato</h2>
        <h2>Reportar Bug</h2>
        <h2>Termos e Condições</h2>
    </div>

    <div className={styles.paragrafo}>
        <p>OliVerse ©2024 - Todos os direitos reservados.</p>
    </div>

  </footer>
  )
}

export default Footer