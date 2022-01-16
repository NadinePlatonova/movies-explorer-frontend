import React from 'react';

function FilterCheckbox() {
    return (
        <label className="filter-checkbox__label">
            <input className="filter-checkbox__input" type="checkbox"/>
            <span className="filter-checkbox__slider"></span>
            Короткометражки
        </label>
    )
}

export default FilterCheckbox;