import React from 'react';
import { CardHomeOne } from '../Cards/CardHomeOne';
import { CardWorkComponent } from '../Cards/CardWorkComponent';
import { CardAboutComponent } from '../Cards/CardAboutComponent';
import { Navbar } from '../Navbar/Navbar';

import { FormContact } from '../form/FormContact';


const Home = () => {
    return (
        <div className="nav__cardhome">
            <Navbar/>
                <div className="principal-home">
                    <CardHomeOne/>
                </div>

                <div className="work-component">
                        <CardWorkComponent/>
                </div>

                <div className="about-component">
                    <CardAboutComponent/>
                </div>

                <div className='contact-component'>
                        <FormContact/>
                </div>
        </div>
    );
}

export default Home;
