
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <li className="option" >
            <a className="a" href="/">Leandro xavier</a>
          </li>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a className="a" href="/">Leandro Mariscal</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a className="a" href="/">Curriculum</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a className="a" href="/">Blog</a>
          </li>
    
       
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
         <FontAwesomeIcon icon={faBars} />
        ) : (
            <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
