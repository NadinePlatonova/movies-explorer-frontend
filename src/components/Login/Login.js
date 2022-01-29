import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailEdit(e) {
        setEmail(e.target.value);
    }

    function handlePasswordEdit(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        setEmail('');
        setPassword('');
        props.onLogin({email, password});
    }

    return (
        <div className="auth-reg">
            <img src={logo} alt="Логотип" className="auth-reg__logo" />
            <h2 className="auth-reg__title">Рады видеть!</h2>
            <form className="auth-reg__form" onSubmit={handleSubmit}>
                <div className="auth-reg__container">
                    <label className="auth-reg__label">E-mail</label>
                    <input value={email} onChange={handleEmailEdit} className="auth-reg__input" id="email" name="email" type="email" required></input>
                    <label className="auth-reg__label">Пароль</label>
                    <input value={password} onChange={handlePasswordEdit} className="auth-reg__input" id="password" name="password" type="password" required></input>
                    <button className="auth-reg__button" aria-label="Войти">Войти</button>
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