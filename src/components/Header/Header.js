import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import logo from '../../images/logo.svg';
// чтобы посмотреть header с ссылками на фильмы, сохраненными фильмами и аккаунтом,
// нужно поставить у переменной loggedIn значение true (это временное решение)
// const loggedIn = false;

function Header(props) {
    return (
        <header className={`header ${props.loggedIn ? 'header_type_loggedIn' : ''}`}>
            <Link to="/"><img className={`header__logo ${props.loggedIn ? 'header__logo_type_loggedIn' : ''}`} src={logo} alt="Логотип" /></Link>
            
            {!props.loggedIn && (
                <div className="header__list">
                    <Link className="header__item" to="/signup">Регистрация</Link>
                    <Link className="header__item header__item_button" to="/signin">Войти</Link>
                </div>
            )}
        
            {props.loggedIn && (
                <Navigation />
            )}

            {props.loggedIn && (
                <BurgerMenu onBurgerMenu={props.onBurgerMenu}/>
            )}

        </header>
    )
}

export default Header;