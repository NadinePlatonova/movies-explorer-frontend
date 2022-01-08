import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <div className="header__list">
                <Link className="header__item" to="/signup">Регистрация</Link>
                <Link className="header__item header__item_button" to="/signin">Войти</Link>
            </div>
        </header>
    )
}

export default Header;