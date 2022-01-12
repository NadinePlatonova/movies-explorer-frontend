import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className="page-not-found">
            <h3 className="page-not-found__title">404</h3>
            <p className="page-not-found__text">Страница не найдена</p>
            <Link to="/" className="page-not-found__link">Назад</Link>
        </section>
    )
}

export default PageNotFound;