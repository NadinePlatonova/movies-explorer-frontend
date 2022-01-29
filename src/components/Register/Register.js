import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleNameEdit(e) {
        setName(e.target.value);
    }

    function handleEmailEdit(e) {
        setEmail(e.target.value);
    }

    function handlePasswordEdit(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister({name, email, password});
    }

    return (
        <div className="auth-reg">
            <img src={logo} alt="Логотип" className="auth-reg__logo" />
            <h2 className="auth-reg__title">Добро пожаловать!</h2>
            <form className="auth-reg__form" onSubmit={handleSubmit}>
                <div className="auth-reg__container">
                    <label className="auth-reg__label">Имя</label>
                    <input value={name} onChange={handleNameEdit} className="auth-reg__input" id="name" name="name" type="text" required></input>
                    <label className="auth-reg__label">E-mail</label>
                    <input value={email} onChange={handleEmailEdit} className="auth-reg__input" id="email" name="email" type="email" required></input>
                    <label className="auth-reg__label">Пароль</label>
                    <input value={password} onChange={handlePasswordEdit} className="auth-reg__input" id="password" name="password" type="password" required></input>
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