const MOVIE_URL = 'https://api.nomoreparties.co';

const isUrlValid = (url) => {
    try {
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
}

const setImageUrl = (imageUrl) => {
    if (isUrlValid(imageUrl)) {
        return imageUrl;
    }

    return `${MOVIE_URL}${imageUrl.url}`
};

export default setImageUrl;