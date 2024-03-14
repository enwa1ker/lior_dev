import React, { FC, useEffect } from 'react';
import s from './Home.module.scss'
import services_img from '../../Assets/image/Ramilya/img_services.png'
import ui from '../../Assets/image/Ramilya/ui.png'
import el2 from '../../Assets/image/Ramilya/elements2.png'
import vect1 from '../../Assets/image/Ramilya/Vect1.png'
import vect2 from '../../Assets/image/Ramilya/Vect2.png'
import vect3 from '../../Assets/image/Ramilya/Vect3.png'
import vect4 from '../../Assets/image/Ramilya/Vect4.png'
import vect5 from '../../Assets/image/Ramilya/Vect5.png'
import vect6 from '../../Assets/image/Ramilya/Vect6.png'
import django from '../../Assets/image/Ramilya/django.png'
import js from '../../Assets/image/Ramilya/js.png'
import ts from '../../Assets/image/Ramilya/typescript.png'
import react from '../../Assets/image/Ramilya/react.png'
import redis from '../../Assets/image/Ramilya/redis.png'
import docker from '../../Assets/image/Ramilya/docker.png'
import flutter from '../../Assets/image/Ramilya/flutter.png'
import fastapi from '../../Assets/image/Ramilya/fastapi.png'
import mysql from '../../Assets/image/Ramilya/mysql.png'
import mongodb from '../../Assets/image/Ramilya/mongo.png'
import celery from '../../Assets/image/Ramilya/celery.png'
import java from '../../Assets/image/Ramilya/java.png'
import nginx from '../../Assets/image/Ramilya/nginx.png'
import spring from '../../Assets/image/Ramilya/spring.png'
import postgresql from '../../Assets/image/Ramilya/postgresql.png'
import rest from '../../Assets/image/Ramilya/rest.png'
import python from '../../Assets/image/Ramilya/python.png'
import supara from '../../Assets/image/Ramilya/2logo.png'
import itacademy from '../../Assets/image/Ramilya/3logo.png'
import trans from '../../Assets/image/Ramilya/4logo.png'
import keremet from '../../Assets/image/Ramilya/5logo.png'
import inhouse from '../../Assets/image/Ramilya/6logo.png'
import brif_ellipse from '../../Assets/image/Ramilya/brif_bg.png'
import Form from '../../pages/Form/Form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/hooks';
import { fetchByGetListReviews } from '../../Store/slices/reviewsSlice';
import { fetchByGetPortfolio } from '../../Store/slices/portfolioSlice';


const Home: FC = () => {
    const { review_list, error } = useAppSelector(store => store.review)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchByGetListReviews());
        dispatch(fetchByGetPortfolio())
    }, [dispatch])

    return (
        <div>
            <section className={s.bg}>
                <div className='container'>
                    <div className={s.lior_text_wp}>
                        <p className={s.lior_text}>сoздание сайтов
                            Разрабатываем яркие креативные сайты “под ключ”</p>
                    </div>
                    <Link to={'/form'}>
                        <button className={s.btn_header}>связаться с нами</button>
                    </Link>
                </div>
            </section>


            <section>
                <h2 className={s.title}>СТУДИЯ   ВЕБ-ДИЗАЙНА И РАЗРАБОТКИ</h2>
                <div className='container'>
                    <div className={s.services_wp}>
                        <div>
                            <img className={s.services_img} src={services_img} alt="services_img" />
                        </div>
                        <div className={s.services_right}>
                            <h2 className={s.right_title}>СПЕКТР УСЛУГ</h2>
                            <ul className={s.list}>
                                <li>Создание сайтов с адаптивным дизайном <p>Разработка интернет-проектов с оригинальным дизайном, корректно отображаемая на всех возможных устройствах и браузерах.</p></li>
                                <li>Оптимизация и SEO</li>
                                <li>web - разработка</li>
                                <li>Мобильные приложения</li>
                            </ul>
                        </div>

                    </div>
                    <img className={s.el2} src={el2} alt="el2" />
                </div>
            </section>

            <section>
                    <div className={`${s.project_wp} container`}>
                    <div className={s.project_left} >
                        <h2>ВИЗУАЛИЗАЦИЯ УСПЕХА</h2>
                        <h3>Наш проектный процесс</h3>
                        <p>Понимание того, что вы создаете, почему это создается
                            и как мы собираемся использовать опыт вашего бренда
                            с помощью нашего экспертного UX / UI-дизайна.
                            Каждый этап нашего проектного процесса призван
                            обеспечить четкие и краткие результаты и служить
                            вехой на пути к следующему этапу прогресса.</p>
                        <div className={s.wp_vectors}>
                            <div className={s.vect_blocks}>
                                <div>
                                    <img src={vect4} alt="vect4" />
                                    <p>Каркасы и эскизы</p>
                                </div>
                                <div>
                                    <img src={vect5} alt="vect5" />
                                    <p> Разработка</p>
                                </div>
                                <div>
                                    <img src={vect6} alt="vect6" />
                                    <p>Предварительный запуск и запуск</p>
                                </div>
                            </div>
                            <div className={s.vect_blocks}>
                                <div>
                                    <img src={vect1} alt="vect1" />
                                    <p >Планирование проекта</p>
                                </div>
                                <div>
                                    <img src={vect2} alt="vect2" />
                                    <p>Исследования и стратегия</p>
                                </div>
                                <div>
                                    <img src={vect3} alt="vect3" />
                                    <p>Цифровой дизайн</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={ui} alt="img" />
                    </div>
                </div>
            </section>
            <Form />

            <section>
                <h2 className={s.stamps_title}>мы используем</h2>
                <div className={s.stamps_wrapper}>
                    <div className={s.stamps_block_top}>
                        <img src={mongodb} alt="stamps" />
                        <img src={redis} alt="stamps" />
                        <img src={celery} alt="stamps" />
                        <img src={java} alt="stamps" />
                        <img src={nginx} alt="stamps" />
                        <img src={spring} alt="stamps" />
                        <img src={postgresql} alt="stamps" />
                        <img src={rest} alt="stamps" />
                        <img src={python} alt="stamps" />
                    </div>

                    <div className={s.stamps_block_top}>
                        <img src={mongodb} alt="stamps" />
                        <img src={redis} alt="stamps" />
                        <img src={celery} alt="stamps" />
                        <img src={java} alt="stamps" />
                        <img src={nginx} alt="stamps" />
                        <img src={spring} alt="stamps" />
                        <img src={postgresql} alt="stamps" />
                        <img src={rest} alt="stamps" />
                        <img src={python} alt="stamps" />
                    </div>
                </div>

                <div className={s.stamps_wrapper}>
                    <div className={s.stamps_block_down}>
                        <img src={python} alt="stamps" />
                        <img src={django} alt="stamps" />
                        <img src={fastapi} alt="stamps" />
                        <img src={react} alt="stamps" />
                        <img src={docker} alt="stamps" />
                        <img src={ts} alt="stamps" />
                        <img src={js} alt="stamps" />
                        <img src={flutter} alt="stamps" />
                        <img src={mysql} alt="stamps" />
                    </div>

                    <div className={s.stamps_block_down}>
                        <img src={python} alt="stamps" />
                        <img src={django} alt="stamps" />
                        <img src={fastapi} alt="stamps" />
                        <img src={react} alt="stamps" />
                        <img src={docker} alt="stamps" />
                        <img src={ts} alt="stamps" />
                        <img src={js} alt="stamps" />
                        <img src={flutter} alt="stamps" />
                        <img src={mysql} alt="stamps" />
                    </div>
                </div>
            </section>


            <section className={s.sect_portfolio}>
                <h2 className={s.title_portfolio}>Портфолио студии lior dev</h2>
                <div className='container'>
                    <Link to={'/our_works'}>
                        <span className={s.link_portfolio}>смотреть ещё</span>
                    </Link>
                </div>
            </section>

            <section className={s.partners_sect}>
                {/* <a name="partners"></a> */}
                <h2 className={s.partner_title}>наши партнеры</h2>
                <div className={s.stamps_wrapper}>
                    <div className={s.stamps_block_top}>
                        <img src={supara} alt="supara" />
                        <img src={itacademy} alt="itacademy" />
                        <img src={trans} alt="trans" />
                        <img src={keremet} alt="keremet" />
                        <img src={inhouse} alt="inhouse" />
                    </div>

                    <div className={s.stamps_block_top}>
                        <img src={supara} alt="supara" />
                        <img src={itacademy} alt="itacademy" />
                        <img src={trans} alt="trans" />
                        <img src={keremet} alt="keremet" />
                        <img src={inhouse} alt="inhouse" />
                    </div>
                </div>
            </section>

            <section>
                <h2 className={s.partner_title}>ЧТО ГОВОРЯТ ПРО НАС</h2>

            </section>

            <img className={s.ellipse_top} src={brif_ellipse} alt="ell" />

            <section>
                <div className={s.brif_wrapper}>
                    <h2 className={s.brif_title}>Давайте сделаем что-нибудь вместе :)</h2>
                    <Link to={'/form'}>
                        <button className={s.brif_btn}>заполнить бриф</button>
                    </Link>
                </div>
            </section>

            <img className={s.ellipse_bottom} src={brif_ellipse} alt="ellipse" />

        </div >
    );
};

export default Home;