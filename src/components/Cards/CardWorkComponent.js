import React from 'react';
import Card from 'react-animated-3d-card'
import {Animated} from "react-animated-css";
import { Button } from '../button/Button';

export const CardWorkComponent = () => {
    const imageAnime = 'img/anime-app-image.png';
    const imageLife = 'img/life-app.png';
    const imagePanawood = 'img/panawood-image.png'

    const redireccionarPagina = () => {
        window.setTimeout( abrirURL, 1 ); // 1 segundos
    };
    
    const redireccionarPaginaDos = () => {
        window.setTimeout( abrirURLDos, 1 ); // 1 segundos
    };

    const redireccionarPaginaTres = () => {
        window.setTimeout( abrirURLTres, 1 ); // 1 segundos
    };

    function abrirURL(){
      window.open("https://anime-app-final.herokuapp.com/")
    };

    function abrirURLDos(){
        window.open("https://leandro-xavier.github.io/PanaWood/")
      };

      function abrirURLTres(){
        window.open("https://life-app-01.herokuapp.com/life/")
      };
    return (
        <div>
            <div id='proyectos' className="container-work">

                <div data-aos="zoom-in" className='proyectos'>
                    <h1 style={{textAlign:"center", width:'100%'}} >Proyectos</h1>
                    <p style={{textAlign:"center", width:'100%'}}>Algunos de los proyectos </p>
                </div>

                    <div className="card-container" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                        <Card       
                            style={{
                                backgroundImage: `url(${imageAnime})`,
                                width: '350px',
                                 height: '230px',
                                cursor: 'pointer',
                                backgroundSize: 'cover',
                                boxSizing: 'border-box'
                            }}
                            onClick={redireccionarPagina}
                        />
                        <Animated animationIn="flash" animationOut="fadeOut" isVisible={true} animationInDuration={Infinity}>
                            <div className='boton' onClick={redireccionarPagina}>
                                <Button />
                            </div>
                        </Animated>
                    </div>
                
                    <div className="card-container" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                        <Card

                                style={{
                                    backgroundImage: `url(${imagePanawood})`,
                                    width: '350px',
                                    height: '230px',
                                    cursor: 'pointer',
                                    backgroundSize: 'cover',
                                    boxSizing: 'border-box'
                                }}
                                onClick={redireccionarPaginaDos}
                        />
                         <Animated animationIn="flash" animationOut="fadeOut" isVisible={true} animationInDuration={Infinity}>
                            <div className='boton' onClick={redireccionarPaginaDos}>
                                <Button/>
                            </div>
                        </Animated>
                    
                    </div>

                    <div className="card-container" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                        <Card
                                    style={{
                                        backgroundImage: `url(${imageLife})`,
                                        width: '350px',
                                        height: '230px',
                                        cursor: 'pointer',
                                        backgroundSize: 'cover',
                                        boxSizing: 'border-box'
                                    }}
                                    onClick={redireccionarPaginaTres}
                            />
                            <Animated animationIn="flash" animationOut="fadeOut" isVisible={true} animationInDuration={Infinity}>
                                <div className='boton'  onClick={redireccionarPaginaTres}>
                                    <Button/>
                                </div>
                            </Animated>
                    </div>
            </div>

            
        </div>
    )
}
