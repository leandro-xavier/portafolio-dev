import React from 'react';
import { AnimationWrapper } from 'react-hover-animation'
import './NavbarStyles.css';

export const Navbar = () => {


  return (
      <>
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" className='checkbtn'><i className="fas fa-bars"></i></label>
            
            <a href="#" className='enlace'> DEVELOPER</a>

            <ul className='menu'>
                <li>
                    <AnimationWrapper>
                        <a href="#">Inicio</a>
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
                        <a href="../../../docs/Leandro-mariscal-final.pdf" download="curriculum de leandro mariscal">Curriculum</a>
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
