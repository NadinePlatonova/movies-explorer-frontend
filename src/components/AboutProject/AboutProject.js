import React from 'react';

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <div className="section">
                <h2 className="section__title-text">О проекте</h2>
            </div>
        
            <ul className="about-project__container">
                <li className="about-project__item">
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__item">
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            
            <div className="about-project__schedule">
                <div className="about-project__backend">
                    <p className="about-project__time">1 неделя</p>
                    <p className="about-project__stage">Back-end</p>
                </div>
                <div className="about-project__frontend">
                    <p className="about-project__time about-project__time_color">4 недели</p>
                    <p className="about-project__stage">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;