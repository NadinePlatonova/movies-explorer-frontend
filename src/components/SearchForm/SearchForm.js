import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const {
        errors,
        isValid,
        values,
        handleChange,
    } = useFormWithValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(values);
    }

    // const handleCheckbox = (e) => {
    //     props.onCheckbox(e.target.checked);
    // }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__container">
                    <input className="search__input" placeholder="Фильм" type="text" name ="movie" id="movie" required onChange={handleChange}/>
                    <span className="search__error">{errors["movie"]}</span>
                    <button className="search__button" type="submit" aria-label="Искать" disabled={!isValid}></button>
                </div>
                <FilterCheckbox checked={props.isChecked} />
            </form>
        </section>
    )
}

export default SearchForm;