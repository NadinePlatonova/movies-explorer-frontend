import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login(props) {
    const {
        values,
        errors,
        isValid,
        handleChange,
    } = useFormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin(values);
    }

    return (
        <div className="auth-reg">
            <Link to="/"><img src={logo} alt="Логотип" className="auth-reg__logo" /></Link>
            <h2 className="auth-reg__title">Рады видеть!</h2>
            <form className="auth-reg__form" onSubmit={handleSubmit}>
                <div className="auth-reg__container">
                    <label className="auth-reg__label">E-mail</label>
                    <input value={values["email"]} onChange={handleChange} className="auth-reg__input" id="email" name="email" type="email" required 
                        pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"></input>
                    <span className="auth-reg__error">{errors["email"]}</span>
                    <label className="auth-reg__label">Пароль</label>
                    <input value={values["password"]} onChange={handleChange} className="auth-reg__input" id="password" name="password" type="password" minLength="8" required></input>
                    <span className="auth-reg__error">{errors["password"]}</span>
                    <button className="auth-reg__button" aria-label="Войти" type="submit" disabled={!isValid}>Войти</button>
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