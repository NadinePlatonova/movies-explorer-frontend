import React from 'react';
import photo from '../../images/profile-photo.jpg';

function AboutMe() {
    return (
        <section className="student" id="student">
                <div className="section">
                    <h2 className="section__title-text">Студент</h2>
                </div>

                <article className="student__info">
                    <div className="student__description">
                        <h3 className="student__name">Надежда</h3>
                        <p className="student__title">Фронтенд-разработчик, 31 год</p>
                        <p className="student__text">Я родилась на Чукотке, а сейчас живу в Московской области. Более 8 лет работаю в консалтинге по подбору топ-менеджеров. В свободное время играю на укулеле и смотрю фильмы на английском языке. Недавно начала кодить. После окончания "Яндекс.Практикума" хочу найти постоянную работу в веб-разработке, а пока делаю pet-проекты для себя.</p>
                        <nav>
                            <ul className="student__links">
                                <li>
                                    <a href="https://www.facebook.com/nadia.platonova.1" className="student__link" target="_blank" rel="noreferrer">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://github.com/NadinePlatonova" className="student__link" target="_blank" rel="noreferrer">Github</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <img className="student__photo" src={photo} alt="Фото студента"/>
                </article>
        </section>
    )
}

export default AboutMe;