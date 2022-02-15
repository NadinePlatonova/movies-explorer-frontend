import { BREAKPOINTS, FILM_COUNT_PER_PAGE, WINDOW_SIZES } from '../utils/constants';

export const setCardsRender = (windowWidth) => {
    let size = '';
    if (windowWidth >= BREAKPOINTS.LARGE) {
        size = WINDOW_SIZES.LARGE;
    } else if (windowWidth >= BREAKPOINTS.MIDDLE) {
        size = WINDOW_SIZES.MIDDLE;
    } else {
        size = WINDOW_SIZES.SMALL;
    }

    return FILM_COUNT_PER_PAGE[size];
};