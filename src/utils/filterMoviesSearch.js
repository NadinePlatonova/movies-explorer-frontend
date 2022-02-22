import { SHORT_FILM_DURATION } from '../utils/constants';

export const filterSearchByDuration = (movie) => {
    return movie.duration <= SHORT_FILM_DURATION;
}

export const filterMoviesSearch = (search, isShortMovieClicked, movies) => {
    const filterSearchByKeyword = (movie) => {
        return movie.nameRU.toLowerCase().includes(search.toLowerCase())
    }
    if (isShortMovieClicked) {
        return movies.filter(filterSearchByDuration).filter(filterSearchByKeyword)
    } else {
        return movies.filter(filterSearchByKeyword);
    }
}