//css
import styles from './styles.module.css';

//images
import steveSvg from '../../assets/steve.svg';

export default function Contact() {
  return (
    // <div className={styles.contactWrapper}>
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        <img src={steveSvg} />
      </div>
      <div className={styles.contactForm}>
        <div className={styles.contactRight}>
          <form className={styles.form}>
            <div className={styles.formField}>
              <h2>Nome Completo</h2>
              <input placeholder='' />
            </div>
            <div className={styles.formField}>
              <h2>E-mail</h2>
              <input placeholder='' />
            </div>
            <div className={styles.formField}>
              <h2>Mensagem</h2>
              <textarea placeholder='' />
            </div>
            <div className={`btn ${styles.btnEnviar}`}><a href="">Enviar</a></div>
          </form>
        </div>
      </div>

    </div>
    // </div>
  );
}
