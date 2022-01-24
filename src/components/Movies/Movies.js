import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
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
        {
            _id: '4',
            nameRu: 'Баския: Взрыв реальности',
            duration: '1ч 21м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '5',
            nameRu: 'Бег это свобода',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '6',
            nameRu: 'Книготорговцы',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '7',
            nameRu: 'Когда я думаю о Германии ночью',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '8',
            nameRu: 'Gimme Danger: История Игги и The Stooge...',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '9',
            nameRu: 'Дженис: Маленькая девочка грустит',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '10',
            nameRu: 'Соберись перед прыжком',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '11',
            nameRu: 'Пи Джей Харви: A dog called money',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
        {
            _id: '12',
            nameRu: 'По волнам: Искусство звука в кино',
            duration: '1ч 47м',
            thumbnail: 'https://avatarko.ru/img/avatar/17/film_pirat_16269.jpg',
        },
    ]

    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList cards={cards} />
            <button className="movies__button">Ещё</button>
        </section>
    )
}

export default Movies;