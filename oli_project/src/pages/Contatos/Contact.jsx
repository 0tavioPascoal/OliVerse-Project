//imports 
import { useState } from 'react';
import emailjs from '@emailjs/browser'

//css
import styles from './styles.module.css';

//images
import steveSvg from '../../assets/steve.svg';

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function SendEmail(e){
    e.preventDefault()

    if(name === '' || email === '' || message === ''){
      alert('preencha todos os campos')
      return
    }

    const templateParams = {
      from_name : name,
      message: message,
      email: email
    }
    
    emailjs.send("service_qfesx2d", "template_lwm5mkk", templateParams, "0qsxE7BaW3Fu4nemZ")
    .then((Response)=>{
      console.log(Response.status)
      setEmail('')
      setMessage('')
      setName('')
    }, ((err)=>{
      console.log(err)
    }))
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        <img src={steveSvg} alt='logo' />
      </div>
      <div>
      <div>

      <form className={styles.form} onSubmit={SendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
      </div>
    </div>
  );
}
