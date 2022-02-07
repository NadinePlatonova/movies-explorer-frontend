import React from 'react';
import { useLocation } from 'react-router-dom';
import setImageUrl from '../../utils/setImageUrl';

function MoviesCard(props) {
    const location = useLocation();
    const isSavedMovies = location.pathname === '/saved-movies';
    const movieButtonClassName = (`movies-card__button ${isSavedMovies ? 'movies-card__button_type_delete' : (props.isLiked ? 'movies-card__button_type_active' : '')}`);
    const duration = `${Math.round(props.card.duration / 60)}ч ${props.card.duration % 60}м`;

    function handleButtonClick() {
        if (isSavedMovies) {
            props.handleDeleteMovie(props.card.movieId)
        } else {
            props.handleSaveMovie(props.card)
        }
    }

    return (
        <li className="movies-card">
            <a href={props.card.trailerLink} target="_blank" rel="noReferrer">
                <img className="movies-card__pic" src={setImageUrl(props.card.image)} alt={props.card.nameRU}></img>
            </a>
            <div className="movies-card__container">
                <div className="movies-card__info">
                    <h3 className="movies-card__title">{props.card.nameRU}</h3>
                    <p className="movies-card__duration">{duration}</p>
                </div>
                <button className={movieButtonClassName} onClick={handleButtonClick}></button>
            </div>
        </li>
    )
}

export default MoviesCard;