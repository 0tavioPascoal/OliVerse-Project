//imports 
import { NavLink } from 'react-router-dom'

//logo
import logo from '../../assets/logoServer.png'

//css
import styles from './styles.module.css'

import React from 'react'

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <NavLink className={styles.logoImage} to='/'>
                    <img src={logo} alt='logo' width={'100rem'} />
                </NavLink>

                <ul className={styles.navLinks}>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                        <NavLink to='/loja'>
                            Loja
                        </NavLink>
                        <NavLink to='/wiki'>
                            Wiki
                        </NavLink>
                        <NavLink to='/mapa'>
                            Mapa
                        </NavLink>
                        <NavLink to='/regras'>
                            Regras
                        </NavLink>
                        <NavLink to='/contact'>
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Header;