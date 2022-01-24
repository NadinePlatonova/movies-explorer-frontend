import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <div className="auth-reg">
            <img src={logo} alt="Логотип" className="auth-reg__logo" />
            <h2 className="auth-reg__title">Добро пожаловать!</h2>
            <form className="auth-reg__form">
                <div className="auth-reg__container">
                    <label className="auth-reg__label">Имя</label>
                    <input className="auth-reg__input" id="name" name="name" type="text" required></input>
                    <label className="auth-reg__label">E-mail</label>
                    <input className="auth-reg__input" id="email" name="email" type="email" required></input>
                    <label className="auth-reg__label">Пароль</label>
                    <input className="auth-reg__input" id="password" name="password" type="password" required></input>
                    <button className="auth-reg__button auth-reg__button_reg" aria-label="Зарегистрироваться">Зарегистрироваться</button>
                    <div className="auth-reg__caption">
                        <p className="auth-reg__caption-text">Уже зарегистрированы?</p>
                        <Link to="/signin" className="auth-reg__caption-link">Войти</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;