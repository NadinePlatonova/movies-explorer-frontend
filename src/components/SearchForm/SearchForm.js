import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" placeholder="Фильм" type="text" name ="movie" id="movie" required/>
                    <button className="search__button" type="submit" aria-label="Искать"></button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    )
}

export default SearchForm;