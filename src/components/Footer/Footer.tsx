import React, { FC } from 'react';
import s from './Footer.module.scss'
import logo from '../../Assets/image/Ramilya/logo.png'
import tg from '../../Assets/image/Ramilya/telegram.png'
import inst from '../../Assets/image/Ramilya/instagram.png'
import whatsapp from '../../Assets/image/Ramilya/whatsapp.png'

const Footer: FC = () => {
    return (
        <footer className={`${s.j} ${s.footer}`}>
            <div className='container'>
                <div className={s.wrapper}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <h3 className={s.description}>Мы рады предложить индивидуальный подход
                        к каждому проекту, гарантируя внимание
                        к деталям и стремление к совершенству во всём, что мы делаем.</h3>
                    <div>
                        <h2 className={s.social_block}>Свяжитесь с нами</h2>
                        <div className={s.image_wrapper}>
                            <a href="https:t.me/">
                                <img src={tg} alt="tg" />
                            </a>
                            <a href="">
                                <img src={inst} alt="inst" />
                            </a>
                            <a href="">
                                <img src={whatsapp} alt="whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className={s.footer_end}>Все права зашищены 2024 г.</h2>
            </div>
        </footer>
    );
};

export default Footer;