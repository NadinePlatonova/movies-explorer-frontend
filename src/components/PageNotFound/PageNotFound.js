import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <section className="page-not-found">
            <h3 className="page-not-found__title">404</h3>
            <p className="page-not-found__text">Страница не найдена</p>
            <button className="page-not-found__link" onClick={handleGoBack}>Назад</button>
        </section>
    )
}

export default PageNotFound;