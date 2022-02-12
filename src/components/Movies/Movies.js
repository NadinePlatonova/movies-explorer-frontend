import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
    const allMoviesNumber = props.allMovies.length;
    const foundMoviesNumber = props.searchResults.length;

    function handleMoreButtonShow() {
        return foundMoviesNumber < allMoviesNumber
    }

    function handleMoreButtonClick() {
        let moviesToAddNumber = props.cardsRendering.add;
        if (allMoviesNumber > foundMoviesNumber + moviesToAddNumber) {
            props.onShowMoreMovies(foundMoviesNumber, moviesToAddNumber)
        } else {
            moviesToAddNumber = allMoviesNumber - foundMoviesNumber
            if (moviesToAddNumber > 0) {
                props.onShowMoreMovies(foundMoviesNumber, moviesToAddNumber)
            }
        }
    }
    console.log(props.checked)
    console.log(props.onToggleMovieStatus)

    return (
        <section className="movies">
            <SearchForm
                onSubmit={props.onSubmit}
                onCheckbox={props.onCheckbox}
                checked={props.checked}
            />
            <MoviesCardList 
                searchResults={props.searchResults}
                savedMovies={props.savedMovies}
                handleSaveMovie={props.onToggleMovieStatus}
                handleDeleteMovie={props.handleDeleteMovie}
            />
            {!props.isLoading && props.notFoundMovies && (
                <p className="movies__notfound-text">Ничего не найдено</p>
            )}
            {handleMoreButtonShow() && <button className="movies__button" onClick={handleMoreButtonClick}>Ещё</button>}
        </section>
    )
}

export default Movies;