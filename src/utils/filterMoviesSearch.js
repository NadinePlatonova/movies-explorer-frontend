export const filterSearchByDuration = (item) => {
    return item.duration <= 40;
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

export default filterMoviesSearch;