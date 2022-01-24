import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    const cards = [
        {
            _id: '1',
            nameRu: '33 слова о дизайне',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '2',
            nameRu: 'Киноальманах «100 лет дизайна»',
            duration: '1ч 3м',
            thumbnail: 'https://avatarko.ru/img/avatar/1/Jack_Vorobei.jpg',
        },
        {
            _id: '3',
            nameRu: 'В погоне за Бенкси',
            duration: '1ч 42м',
            thumbnail: 'https://avatarko.ru/img/avatar/28/film_Thor_27186.jpg',
        },
    ]
    
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList cards={cards} isSavedMovies={true} />
            <div className="movies__saved-divider"></div>
        </section>
    )
}

export default SavedMovies;