import React from 'react';

function FilterCheckbox() {
    return (
        <label className="filter-checkbox">Короткометражки
            <input className="filter-checkbox__input" type="checkbox"/>
            <span className="filter-checkbox__slider"></span>
        </label>
    )
}

export default FilterCheckbox;