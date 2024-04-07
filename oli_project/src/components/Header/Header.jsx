//imports
import { NavLink } from 'react-router-dom';

//logo
import logo from '../../assets/logoServer.png';

//css
import styles from './styles.module.css';

import { useState, useEffect } from 'react';

import { FaArrowUp } from 'react-icons/fa';


import darkIcon from '../../assets/dark-theme-icon.svg';
import lightIcon from '../../assets/light-theme-icon.svg';

import classnames from 'classnames';

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false); // Estado para controlar a visibilidade do botão

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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

      { }
      <button className={`${styles.scrollToTopButton} ${showScrollButton ? '' : styles.fadeOut}`} onClick={scrollToTop}>
        <FaArrowUp />
      </button>
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
