import React from 'react';
import './cardhome.css';

export  const CardHomeOne = () => {

    return (
        <div className="card-list contenedor" >
          <img className="img" src="img/profile.jfif" alt="" data-aos="flip-left"  data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"  data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"/>
            <p className='p'>hola, soy leandro </p>
        </div>
    );
}
