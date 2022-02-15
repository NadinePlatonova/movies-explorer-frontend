export const profileMessages = {
    SUCCESS_MSG: 'Профиль успешно обновлен',
    BAD_REQUEST_MSG: 'При обновлении профиля произошла ошибка',
    CONFLICT_MSG: 'Данный e-mail уже используется другим пользователем',
}

export const SERVER_ERROR_MSG = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const registrationMessages = {
    BAD_REQUEST_MSG: 'При регистрации произошла ошибка',
    CONFLICT_MSG: 'Данный e-mail уже используется другим пользователем',
}

export const durationFormat = (min) => {
    const h = Math.floor(min / 60);
    const m = min % 60;

    if (h >=1) {
        return `${h}ч ${m}м`;
    } else {
        return `${m}м`;
    }
}

export const SHORT_FILM_DURATION = 40;

export const WINDOW_SIZES = {
    LARGE: "LARGE",
    MIDDLE: "MIDDLE",
    SMALL: "SMALL",
}

export const BREAKPOINTS = {
    [WINDOW_SIZES.LARGE]: 1025,
    [WINDOW_SIZES.MIDDLE]: 767,
}

export const FILM_COUNT_PER_PAGE = {
    [WINDOW_SIZES.LARGE]: { total: 12, add: 3 },
    [WINDOW_SIZES.MIDDLE]: { total: 8, add: 2 },
    [WINDOW_SIZES.SMALL]: { total: 5, add: 1 },
}

