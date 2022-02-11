import React from 'react';

function FilterCheckbox(props) {
    console.log(props.checked)
    return (
        <label className="filter-checkbox">Короткометражки
            <input className="filter-checkbox__input" type="checkbox" onChange={props.onChange} checked={props.checked} />
            <span className="filter-checkbox__slider"></span>
        </label>
    )
}

export default FilterCheckbox;