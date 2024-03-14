import React from 'react';
import s from './AboutUs.module.scss'
import history from '../../Assets/image/AboutUs/history.png'
import mission from '../../Assets/image/AboutUs/mission.png'
import quotes from '../../Assets/image/AboutUs/quotes.png'
import people from '../../Assets/image/AboutUs/people.png'

const AboutUs = () => {
    return (
        <div>
            <section className={s.bg}>
                <div className="container">
                    <p className={s.title}>О СТУДИИ <br/>
                        <b>LIOR DEV</b></p>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className={s.history}>
                       <div className={s.history_left}> <span className={s.history_name}>ИСТОРИЯ СОЗДАНИЯ СТУДИИ</span>
                           <p className={s.about_text}>LiorDev была основана Батыром Осмонкуловым,
                               вдохновлённым идеей создавать инновационные и функциональные веб-решения для бизнеса и индивидуальных клиентов.
                               С момента основания и до сегодняшнего дня, мы стремимся к постоянному развитию,
                               используя последние технологии и следуя мировым трендам в дизайне и веб-разработке.</p></div>
                        <div>
                            <img src={history} alt="history"/>
                        </div>
                    </div>
                </div>

                <div className={s.history}>
                    <div className={s.history_left}>
                        <img src={mission} alt="mission"/>
                    </div>
                    <div> <span className={s.history_name}>МИССИЯ И ВИДЕНИЕ</span>
                        <p className={s.about_text}>Наша миссия заключается в том, чтобы помогать бизнесу расти и достигать новых высот с помощью качественных веб-решений.
                            Мы видим себя не просто как исполнителей, а как партнёров наших клиентов,
                            стремясь к созданию продуктов, которые будут служить долгосрочным успехом
                            и развитием их бизнеса.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>ИНФОРМАЦИЯ О КОМАНДЕ</h2>
                    <div className={s.info_table}>
                        <img src={quotes} alt="quotes"/>
                        <p className={s.info_text}>В LiorDev мы гордимся нашей командой - группой талантливых и увлеченных профессионалов,
                            объединенных общей целью - создавать веб-решения, которые вдохновляют и вносят реальный вклад
                            в успех наших клиентов. Каждый член команды вносит уникальный вклад в наш коллективный успех,
                            и вот некоторые из ключевых лиц, стоящих за нашими проектами.</p>
                    </div>
                </div>
            </section>

            <section>

                <div className="container">
                    <h2>КОМАНДА СТУДИИ</h2>
                    <p className={s.team_text}>Наши проекты воплощаются в жизнь благодаря усилиям команды талантливых специалистов,
                        в которую входят разработчики, дизайнеры, аналитики и менеджеры проектов. Батыр Осмонкулов,
                        основатель и стратегический руководитель LiorDev, вместе с командой обеспечивает высокий уровень
                        исполнения каждого проекта.</p>

                    <div className={s.team_table}>
                        <div className={s.first_team}>
                            <div> className={s.people_team}
                                <img src={people} alt="people"/>
                                <div className={s.people_text}>
                                    <h6>Батыр Осмонкулов</h6>
                                    <p>Его видение и стремление к инновациям направляют нашу студию к новым вершинам.</p>
                                    <span className={s.socials_team}></span>
                                </div>
                            </div>

                        </div>
                        <div className={s.second_team}>
                            <div> className={s.people_team}
                                <img src={people} alt="people"/>
                                <div className={s.people_text}>
                                    <h6>Батыр Осмонкулов</h6>
                                    <p>Его видение и стремление к инновациям направляют нашу студию к новым вершинам.</p>
                                    <span className={s.socials_team}></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;