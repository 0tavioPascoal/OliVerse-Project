//imports
import { NavLink } from 'react-router-dom';

//logo
import logo from '../../assets/logoServer.png';

//css
import styles from './styles.module.css';

import React, { useState } from 'react';

import darkIcon from '../../assets/dark-theme-icon.svg';
import lightIcon from '../../assets/light-theme-icon.svg';

import classnames from 'classnames';

const Header = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <NavLink className={styles.logoImage} to='/'>
          <img src={logo} alt='logo' width={'80rem'} />
        </NavLink>

        <ul className={styles.navLinks}>
          <li>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/loja'>Loja</NavLink>
            <NavLink to='/wiki'>Wiki</NavLink>
            <NavLink to='/mapa'>Mapa</NavLink>
            <NavLink to='/regras'>Regras</NavLink>
            <NavLink to='/contact'>Contato</NavLink>
            <Switch />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

function Switch() {
  const [isSelected, setIsSelected] = useState(false);

  const toggleChecked = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div className={styles.switchContainer}>
      <div
        className={classnames(styles.switchDefault, {
          [styles.switchSelected]: isSelected,
        })}
        onClick={toggleChecked}
      >
        <span className={styles.switchBall}></span>
      </div>{' '}
      <div className={styles.icon}>
        {isSelected ? <img src={darkIcon} /> : <img src={lightIcon} />}
      </div>
    </div>
  );
}
