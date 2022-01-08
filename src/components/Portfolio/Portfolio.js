import React from 'react';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav>
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <a href="https://nadineplatonova.github.io/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
                            <p className="portfolio__text">Статичный сайт</p>
                            <button className="portfolio__button"></button>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a href="https://nadineplatonova.github.io/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
                            <p className="portfolio__text">Адаптивный сайт</p>
                            <button className="portfolio__button"></button>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a href="https://platonova.mesto.nomoredomains.rocks" className="portfolio__link" target="_blank" rel="noreferrer">
                            <p className="portfolio__text">Одностраничное приложение</p>
                            <button className="portfolio__button"></button>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Portfolio;