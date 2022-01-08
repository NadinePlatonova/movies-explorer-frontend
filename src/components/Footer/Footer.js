import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__copyright">&copy; 2022</p>
                <nav>
                    <ul className="footer__links">
                        <li>
                            <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a href="https://github.com/NadinePlatonova" className="footer__link" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/nadia.platonova.1" className="footer__link" target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;