const cardsRendering = {
    large: { total: 12, add: 3 },
    middle: { total: 8, add: 2 },
    small: { total: 5, add: 1 },
};

export const setCardsRender = (windowWidth) => {
    let size = '';
    if (windowWidth >= 1025) {
        size = 'large';
    } else if (windowWidth >= 767) {
        size = 'middle';
    } else {
        size = 'small';
    }

    return cardsRendering[size];
};