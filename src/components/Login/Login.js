import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <div className="auth-reg">
            <img src={logo} alt="Логотип" className="auth-reg__logo" />
            <h2 className="auth-reg__title">Рады видеть!</h2>
            <form className="auth-reg__form">
                <div className="auth-reg__container">
                    <label className="auth-reg__label">E-mail</label>
                    <input className="auth-reg__input" id="email" name="email" type="email"></input>
                    <label className="auth-reg__label">Пароль</label>
                    <input className="auth-reg__input" id="password" name="password" type="password"></input>
                    <button className="auth-reg__button">Войти</button>
                    <div className="auth-reg__caption">
                        <p className="auth-reg__caption-text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="auth-reg__caption-link">Регистрация</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;