import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {

    return (
        <section className="movies">
            <SearchForm
                onSubmit={props.onSubmit}
                onCheckbox={props.onCheckbox}
                isChecked={props.isCheckboxActive}
            />
            <MoviesCardList 
                onSearchResults={props.onSearchResults}
                savedMovies={props.savedMovies}
                handleSaveMovie={props.onToggleMovieStatus}
                handleDeleteMovie={props.handleDeleteMovie}
            />
            <button className="movies__button">Ещё</button>
        </section>
    )
}

export default Movies;