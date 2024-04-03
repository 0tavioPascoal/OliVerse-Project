import React from 'react'
import {NavLink} from 'react-router-dom'

//css
import styles from './styles.module.css';

//icons
import iconePrincipal from '../../assets/emConstrucaoIcone.png'

const EmConstrucao = () => {
    return (
        <div>
            <div className={styles.emConstrucaoContainer}>
                <img src={iconePrincipal}/>
                <p>
                    Tela em construção. Estamos trabalhando duro nos bastidores para trazer a você uma experiência incrível. Volte em breve para conferir o resultado final!
                </p>
                <div className={`btn`}><NavLink to={'/'}><a href="">Voltar para o inicio</a></NavLink></div>
            </div>
        </div>
    )
}

export default EmConstrucao