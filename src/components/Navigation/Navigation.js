import React from 'react';
import { NavLink } from 'react-router-dom';
import icon_account from '../../images/icon_account.svg';

function Navigation() {
    return (
            <div className="navigation">
                <div className="navigation__container">
                    <ul className="navigation__movies">
                        <li><NavLink to="/movies" className="navigation__item">Фильмы</NavLink></li>
                        <li><NavLink to="/saved-movies" className="navigation__item navigation__item_type_normal">Сохранённые фильмы</NavLink></li>
                    </ul>
                    <ul className="navigation__profile">
                        <li><NavLink to="/profile" className="navigation__item">Аккаунт</NavLink></li>
                        <li><img className="navigation__account-icon" src={icon_account} alt="Иконка аккаунта"/></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navigation;