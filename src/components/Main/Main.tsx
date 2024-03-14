import React, { FC } from 'react';
import s from './Main.module.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import AboutUs from '../../pages/AboutUs/AboutUs';
import OurWorks from '../../pages/OurWorks/OurWorks';
import Services from '../../pages/Services/Services';
import Form from '../../pages/Form/Form';

const Main: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/our_works' element={<OurWorks />} />
            <Route path='/services' element={<Services />} />
            <Route path='/form' element={<Form />} />
        </Routes>
    );
};

export default Main;