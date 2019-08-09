import React from 'react';
import EnvLogo from './../../img/envlogo.png';
import Navigation from './../Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <img src={EnvLogo} alt="envLogo" style={{width: '200px', height: '100px', color: 'black'}}></img>
            <Navigation/>
        </div>
    );
};
    
export default Header;
