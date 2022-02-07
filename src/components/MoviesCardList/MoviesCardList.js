import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <ul className="movies-card-list">
            {props.onSearchResults.map((item) => {
                    return (
                        <MoviesCard
                            key={item.id}
                            card={item}
                            isLiked={props.savedMovies.some((i) => {
                                return i.movieId === `${item.id}` ? true : false
                            })}
                            handleSaveMovie={props.handleSaveMovie}
                            handleDeleteMovie={props.handleDeleteMovie}
                        />
                    )
            })
            }
        </ul>
    )
}

export default MoviesCardList;