import React from "react";

function BurgerMenu(props) {
    return (
        <button className="burger-menu" type="button" aria-label="Показать меню" onClick={props.onBurgerMenu}></button>
    )
}

export default BurgerMenu;