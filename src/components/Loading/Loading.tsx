    import React, { FC } from 'react';
import './Loading.css'

const Loading: FC = () => {
    return (
        <div className='content'>
            <div className="loader">
                <div className="cell d-0"></div>
                <div className="cell d-1"></div>
                <div className="cell d-2"></div>

                <div className="cell d-1"></div>
                <div className="cell d-2"></div>


                <div className="cell d-2"></div>
                <div className="cell d-3"></div>


                <div className="cell d-3"></div>
                <div className="cell d-4"></div>
            </div>
        </div>
    );
};

export default Loading;