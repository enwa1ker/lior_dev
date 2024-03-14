import React, { FC, useEffect } from 'react';
import s from './ModalSucces.module.scss'
import done from '../../../Assets/image/Ramilya/done.png'
import top_img from '../../../Assets/image/Ramilya/form_top_img.png'


interface FormProps {
    setModalEnter: (e: boolean) => void
    modalEnter: boolean
    message: string
}

const ModalSucces: FC<FormProps> = ({ modalEnter, setModalEnter, message }) => {
    const hideModal = () => {
        setModalEnter(false)
    }

    useEffect(() => {
        // При рождении убрать скрол
        document.body.style.overflow = 'hidden'
        // При нажатии на ESC закрыть модальное окно
        document.addEventListener('keydown', e => {
            e.code === 'Escape' && hideModal()
        })
        // При рождении навесит другое событие на кнопку назад у браузера
        if (modalEnter) {
            window.history.pushState(null, '', window.location.href)
            window.onpopstate = () => setModalEnter(false)
        }
        return () => {
            // При закрытии  модального окна вернуть скролл
            document.body.style.overflow = 'auto'
            // При закрытии убрать действия с кнопки ESC
            document.removeEventListener('keydown', () => { })
            // При закрытии вернуть действие по умолчанию на кнопку назад в браузере
            if (!modalEnter) window.history.back()
            window.onpopstate = () => { }
        }
    }, [])

    return (
        <div onClick={hideModal} className={s.wrapper}>
            <div onClick={e => e.stopPropagation} className={s.container}>
                <div className={s.top_img}>
                    <img src={done} alt="done" />
                    {/* <h1>{message}</h1> */}
                    <h1 className={s.success_title}>Спасибо! Форма была успешно отправлена.</h1>
                </div>
            </div>
        </div>
    );
};

export default ModalSucces;