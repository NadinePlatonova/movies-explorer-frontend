import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

    return (
        <section className="movies">
            <SearchForm 
                onSubmit={props.onSubmit}
                onCheckbox={props.onCheckbox}
                isChecked={props.isCheckboxActive}
            />
            <MoviesCardList
                searchResults={props.searchResults}
                savedMovies={props.savedMovies}
                handleDeleteMovie={props.handleDeleteMovie}
            />
            <div className="movies__saved-divider"></div>
        </section>
    )
}

export default SavedMovies;