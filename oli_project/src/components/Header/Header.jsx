//imports 
import { NavLink } from 'react-router-dom'

//logo
import logo from '../../assets/logoServer.png'

//css
import styles from './styles.module.css'


import React from 'react'

const Header = () => {
  return (
  <nav className={styles.navbar} >
    <NavLink className={styles.logo} to='/'>
        <img src={logo} alt='logo' width={'100rem'} />
    </NavLink>

    <ul className={styles.links_list}>
        <li>
            <NavLink to='/'>
                home
            </NavLink>
            <NavLink to='/loja'>
                loja
            </NavLink>
            <NavLink to='/wiki'>
                wiki
            </NavLink>
            <NavLink to='/mapa'>
                mapa
            </NavLink>
            <NavLink to='/regras'>
                regras
            </NavLink>
            <NavLink to='/contact'>
                Contatos
            </NavLink>
        </li>
    </ul>
</nav>
)
    
}

export default Header;