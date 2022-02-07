const setDurationTemplate = (min) => {
    const h = Math.floor(min / 60);
    const m = min % 60;

    if (h >= 1) {
        return `${h}ч ${m}м`;
    } else {
        return `${m}м`;
    }
}

export default setDurationTemplate;