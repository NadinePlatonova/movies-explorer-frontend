import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register(props) {

    const {
        values,
        errors,
        isValid,
        handleChange,
    } = useFormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault()
        props.onRegister(values)
    }

    function handleChangeClick(e) {
        handleChange(e)
        if (props.formSubmitMessage.length > 0) {
            props.resetFormMessage();
        }
    }

    return (
        <div className="auth-reg">
            <Link to="/"><img src={logo} alt="Логотип" className="auth-reg__logo" /></Link>
            <h2 className="auth-reg__title">Добро пожаловать!</h2>
            <form className="auth-reg__form" onSubmit={handleSubmit}>
                <div className="auth-reg__container">
                    <label className="auth-reg__label">Имя</label>
                    <input value={values["name"]} onChange={handleChangeClick} className="auth-reg__input" id="name" name="name" type="text" minLength="2" maxLength="30" pattern="[A-Za-zА-ЯЁа-яё -]+" required></input>
                    <span className="auth-reg__error">{errors["name"]}</span>
                    <label className="auth-reg__label">E-mail</label>
                    <input value={values["email"]} onChange={handleChangeClick} className="auth-reg__input" id="email" name="email" type="email" required></input>
                    <span className="auth-reg__error">{errors["email"]}</span>
                    <label className="auth-reg__label">Пароль</label>
                    <input value={values["password"]} onChange={handleChangeClick} className="auth-reg__input" id="password" name="password" type="password" minLength="8" required></input>
                    <span className="auth-reg__error">{errors["password"]}</span>
                    <p className="auth-reg__message">{props.formSubmitMessage}</p>
                    <button className="auth-reg__button auth-reg__button_reg" aria-label="Зарегистрироваться" type="submit" disabled={!isValid}>Зарегистрироваться</button>
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