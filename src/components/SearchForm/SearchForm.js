import React from 'react';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" placeholder="Фильм" type="text" name ="movie" id="movie"/>
                    <button className="search__button" type="submit"></button>
                </div>
                <label className="checkbox">
                    <input className="checkbox__icon" type="checkbox"/>
                    <span className="checkbox__slider"></span>
                    Короткометражки
                </label>
            </form>
        </section>
    )
}

export default SearchForm;