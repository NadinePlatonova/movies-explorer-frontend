import React from "react";
import { NavLink } from "react-router-dom";

function MenuPage(props) {
    return (
        <section className={`menu-page ${props.isOpen ? 'menu-page_opened' : ''}`}>
            <div className="menu-page__container">
                <button className="menu-page__close-button" aria-label="Закрыть меню" onClick={props.onClose}></button>
                <div className="menu-page__navigation">
                    <ul className="menu-page__links">
                        <li><NavLink exact to="/" className="menu-page__link" activeClassName="menu-page__link_active">Главная</NavLink></li>
                        <li><NavLink to="/movies" className="menu-page__link" activeClassName="menu-page__link_active">Фильмы</NavLink></li>
                        <li><NavLink to="/saved-movies" className="menu-page__link" activeClassName="menu-page__link_active">Сохранённые фильмы</NavLink></li>
                    </ul>
                    <div className="menu-page__account">
                        <NavLink to="/profile" className="menu-page__link menu-page__link_type_account" activeClassName="menu-page__link_active">Аккаунт</NavLink>
                        <div className="menu-page__account-pic"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MenuPage;