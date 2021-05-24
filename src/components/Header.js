import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <a className="link" href="../../public/index.html" target="_self">
            <img className="header__logo" src={logo} alt="Логотип"/>
            </a>
        </header>
    );
}

export default Header;