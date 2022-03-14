import React from 'react';
import { AnimationWrapper } from 'react-hover-animation'
import './NavbarStyles.css';

export const Navbar = () => {


  return (
      <>
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className='checkbtn'><i className="fas fa-bars"></i></label>
            
            <a href="/" className='enlace'> DEVELOPER</a>

            <ul className='menu'>
                <li>
                    <AnimationWrapper>
                        <a href="/">Inicio</a>
                    </AnimationWrapper>
                </li>
                <li>
                    <AnimationWrapper>
                        <a href="#proyectos">Proyectos</a>
                    </AnimationWrapper>
                </li>
                <li>
                    <AnimationWrapper>
                        <a href="#tecnologias">Tecnologias</a>
                    </AnimationWrapper>
                </li>
               <li>
                   <AnimationWrapper>
                        <a href="https://drive.google.com/file/d/1lGBgZNYY_o93ywYc-aLDQD7_tpil0D9t/view?usp=sharing" target="_blank" download="curriculum.pdf " rel="noopener noreferrer">Curriculum</a>
                   </AnimationWrapper>
               </li>
               <li>
                   <AnimationWrapper>
                        <a href="#contacto">Contacto</a>
                   </AnimationWrapper>
               </li>
               
            </ul>
        </nav>
        </>
  )
};
