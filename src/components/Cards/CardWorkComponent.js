import React from 'react';

import './cardwork.css';


export const CardWorkComponent = () => {

    return (
        <div>
            <div id='proyectos' className="container-work">

                <div data-aos="zoom-in" className='proyectos'>
                    <h1 style={{textAlign:"center", width:'100%'}} >Proyectos</h1>
                    <p style={{textAlign:"center", width:'100%'}}>Algunos de los proyectos </p>
                </div>
                 
                <div className="container">
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <h3>AnimeAPP</h3>
                            <p className='pa'>Aplicacion Consume api de aniapi y creada en react</p>
                            <div className='contenedor'>
                            <img className='img-ico-contact' src="img/icons8-html-5.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-css3.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-javascript.svg" alt="" />
                            
                      </div>  
                      <div className='contenedor'>
                            <img className='img-ico-contact' src="img/icons8-oreja.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-reaccionar-nativo.svg" alt="" />
                      </div>  
                            <a href="https://anime-app-final.herokuapp.com/" target='_blank' rel="noreferrer">Ver App</a>
                        </div>
                        </div>
                    </div>

                <div className="card">
                    <div className="box">
                    <div className="content">
                        <h3>Panawood</h3>
                        <p className='pa'>Pagina web creada con html y css para negocio de maderas</p>
                      <div className='contenedor'>
                            <img className='img-ico-contact' src="img/icons8-html-5.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-css3.svg" alt="" />
                            
                      </div>     
                    <a href="https://leandro-xavier.github.io/PanaWood/" target='_blank' rel="noreferrer">Ver App</a>
                    </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                    <div className="content">
                        
                        <h3>Life App</h3>
                        <p className='pa'>Aplicacion para subir imagenes, login con google y chatenlinea</p>
                        <div className='contenedor'>
                            <img className='img-ico-contact' src="img/icons8-html-5.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-css3.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-redux.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-reaccionar-nativo.svg" alt="" />
                            
                      </div>  
                      <div className='contenedor'>
                            <img className='img-ico-contact' src="img/icons8-firebase.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-oreja.svg" alt="" />
                            <img className='img-ico-contact' src="img/icons8-javascript.svg" alt="" />
                      </div>  
                        <a href="https://life-app-01.herokuapp.com/life/" target='_blank' rel="noreferrer">Ver App</a>
                    </div>
                    </div>
                </div>
</div>
        
            </div>

            
        </div>
    )
}
