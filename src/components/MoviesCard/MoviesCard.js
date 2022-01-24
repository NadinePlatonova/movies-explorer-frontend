import React from 'react';

function MoviesCard(props) {
    const isLiked = false;
    const isSavedMovies = props.isSavedMovies;
    const movieButtonClassName = (`movies-card__button ${isSavedMovies ? 'movies-card__button_type_delete' : (isLiked ? 'movies-card__button_type_active' : '')}`);

    return (
        <li className="movies-card">
            <img className="movies-card__pic" src={props.card.thumbnail} alt={props.card.nameRu}></img>
            <div className="movies-card__container">
                <div className="movies-card__info">
                    <h3 className="movies-card__title">{props.card.nameRu}</h3>
                    <p className="movies-card__duration">{props.card.duration}</p>
                </div>
                <button className={movieButtonClassName}></button>
            </div>
        </li>
    )
}

export default MoviesCard;