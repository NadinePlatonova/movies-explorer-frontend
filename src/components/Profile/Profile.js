import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isChanged, setIsChanged] = React.useState(false);
    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm,
    } = useFormWithValidation({});
  

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser(values);
    }

    React.useEffect(() => {
        resetForm({ name: currentUser.name, email: currentUser.email });
    }, [currentUser, resetForm]);

    React.useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsChanged(false);
        } else {
            setIsChanged(true);
        }
    }, [currentUser, values]);

    function handleChangeClick(e) {
        handleChange(e)
        if (props.profileMessage.length > 0) {
            props.resetFormMessage();
        }
    }

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form">
                <div className="profile__info">
                    <label className="profile__label">Имя</label>
                    <input onChange={handleChangeClick} value={values["name"]} className="profile__input" id="name" name="name" type="text" minLength="2" maxLength="30" pattern="[A-Za-zА-ЯЁа-яё -]+" />
                    <span className="profile__error">{errors["name"]}</span>
                </div>
                <div className="profile__info">
                    <label className="profile__label">E-mail</label>
                    <input onChange={handleChangeClick} value={values["email"]} className="profile__input" id="email" name="email" type="email"
                        pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}" />
                    <span className="profile__error">{errors["email"]}</span>
                </div>
                <p className="profile__message">{props.profileMessage}</p>
                <button onClick={handleSubmit} className="profile__button" type="submit" disabled={!isValid || !isChanged}>Редактировать</button>
            </form>
            <Link to="/" className="profile__link" onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile;