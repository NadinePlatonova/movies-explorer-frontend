export const BASE_URL = 'https://api.bestfilms.nomoredomains.rocks';

export const register = (data) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            'name': data.name,
            'email': data.email,
            'password': data.password
        })
    })
    .then(checkResponseStatus);
};

export const login = (data) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            'email': data.email,
            'password': data.password
        })
    })
    .then(checkResponseStatus);
};

export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then(checkResponseStatus);
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then(checkResponseStatus);
};

export const editUserInfo = (data) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            'name': data.name,
            'email': data.email
        })
    })
    .then(checkResponseStatus);
};

export const signout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
    })
    .then(checkResponseStatus);
};

export const saveMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "country": data.country || ' ',
            "director": data.director || ' ',
            "duration": data.duration || 0,
            "year": data.year || ' ',
            "description": data.description || ' ',
            "image": `https://api.nomoreparties.co${data.image.url}`,
            "movieId": `${data.id}`,
            "nameRU": data.nameRU || ' ',
            "nameEN": data.nameEN || ' ',
        }),
        credentials: 'include',
    })
    .then(checkResponseStatus);
};

export const deleteMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then(checkResponseStatus);
};

export const getMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then(checkResponseStatus);
};

function checkResponseStatus(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}