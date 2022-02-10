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