import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'react-awesome-button/dist/themes/theme-blue.css';

export const FormContact = () => {
    
  const [state, handleSubmit] = useForm("mayvqken");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <>
      <h1 id='contacto' className='h1-form' data-aos="zoom-out">Contactame</h1>
      <form className='formControl' onSubmit={handleSubmit}  data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className='title-form'>
            <h3>Enviame un mensaje</h3>
          </div>
        <div className='email-data'>
            <label className='email-text' htmlFor="email"> Tu correo electrónico </label>
            <input className='email-campo' id="email" type="email"  name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </div>
        <div className='message-data'>
            <label className='message-text' htmlFor="message"> Escribe tu mensaje </label>
            <textarea className='message-campo' id="message" name="message" />
            <ValidationError prefix="Message"  field="message" errors={state.errors}/>
        </div>
            <button className='boton-form' type="submit" disabled={state.submitting}>Enviar </button>
    </form>
    <div className='contact' data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className='contact-information'>
            <h3 className='h3-contact'>Información de Contacto</h3>
            <p className='p-contact'>Panamá</p>
            <p className='p-contact'>La Chorrera</p>
            <p className='p-contact'>Correo Electrónico</p>
            <p className='p-contact'>leaxavier2014@gmail.com</p>
        </div>
        <div className='follow us'>
            <h3 className='h3-contact-2'>Redes de contacto</h3>
            <a href="https://www.linkedin.com/in/leandro-mariscal-12926117a/"><img className='img-ico-contact' src="img/icons8-linkedin.svg" alt="" /></a>
            <a href="https://api.whatsapp.com/send?phone=50763902315&text=hola,%20qué%20tal?"><img className='img-ico-contact' src="img/icons8-whatsapp.svg" alt="" /></a>
            <a href="https://github.com/leandro-xavier"><img className='img-ico-contact' src="img/icons8-github.svg" alt="" /></a>
        </div>
    </div>
    </>
  );
}

