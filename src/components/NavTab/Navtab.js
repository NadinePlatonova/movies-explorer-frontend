import React from 'react';

function Navtab() {
    return (
        <section className="navtab">
            <nav>
                <ul className="navtab__list">
                    <li>
                        <a href="#about-project" className="navtab__item">О проекте</a>
                    </li>
                    <li>
                        <a href="#techs" className="navtab__item">Технологии</a>
                    </li>
                    <li>
                        <a href="#student" className="navtab__item">Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navtab;