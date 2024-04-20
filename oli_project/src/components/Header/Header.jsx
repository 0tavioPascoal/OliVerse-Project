//imports
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import classnames from 'classnames';

//css
import styles from './styles.module.css';

//icons
import logo from '../../assets/logoServer.png';
import darkIcon from '../../assets/dark-theme-icon.svg';
import lightIcon from '../../assets/light-theme-icon.svg';
import menuMobileHamburguer from '../../assets/menu-burger.png';
import menuMobileClose from '../../assets/cross.png';

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
    <div>
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
          <div className={styles.menuMobileIcon} >
            <img src={menuMobileHamburguer} />
          </div>
        </div>
        { }
        <button className={`${styles.scrollToTopButton} ${showScrollButton ? '' : styles.fadeOut}`} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </nav>

      <nav className={styles.navMobile}>
          <div className={styles.navMobileContainer}>
            <div className={styles.mobilelinks}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/loja'>Loja</NavLink>
                <NavLink to='/wiki'>Wiki</NavLink>
                <NavLink to='/mapa'>Mapa</NavLink>
                <NavLink to='/regras'>Regras</NavLink>
                <NavLink to='/contact'>Contato</NavLink>
                <Switch />
            </div>
            <div className={styles.btnClose}>
              <img src={menuMobileClose}/>
            </div>
          </div>
      </nav>
    </div>
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
