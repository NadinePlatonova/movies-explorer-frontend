import React from 'react';

function FilterCheckbox(props) {
    console.log(props.isChecked)
    return (
        <label className="filter-checkbox">Короткометражки
            <input className="filter-checkbox__input" type="checkbox" onChange={props.onChange} checked={props.isChecked} />
            <span className="filter-checkbox__slider"></span>
        </label>
    )
}

export default FilterCheckbox;