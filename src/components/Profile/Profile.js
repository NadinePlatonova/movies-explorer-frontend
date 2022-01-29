import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleNameEdit(e) {
        setName(e.target.value);
    }

    function handleEmailEdit(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({name, email});
    }

    React.useEffect(() => {
        setName(currentUser ? currentUser.name : '');
        setEmail(currentUser ? currentUser.email : '');
    }, [currentUser]);

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form">
                <div className="profile__info">
                    <label className="profile__label">Имя</label>
                    <input onChange={handleNameEdit} value={name || ''} className="profile__input" id="name" name="name" type="text" />
                </div>
                <div className="profile__info">
                    <label className="profile__label">E-mail</label>
                    <input onChange={handleEmailEdit} value={email || ''} className="profile__input" id="email" name="email" type="email"/>
                </div>
                <button onClick={handleSubmit} className="profile__button" type="submit">Редактировать</button>
            </form>
            <Link to="/" className="profile__link" onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile;