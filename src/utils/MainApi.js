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

function checkResponseStatus(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}