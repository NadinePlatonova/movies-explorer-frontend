import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Надежда!</h2>
            <form className="profile__form">
                <div className="profile__info">
                    <label className="profile__label">Имя</label>
                    <input className="profile__input" id="name" name="name" type="text" />
                </div>
                <div className="profile__info">
                    <label className="profile__label">E-mail</label>
                    <input className="profile__input" id="email" name="email" type="email"/>
                </div>
                <button className="profile__button" type="submit">Редактировать</button>
            </form>
            <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile;