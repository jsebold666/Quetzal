import React from 'react';
import './index.scss';
import Subtitle from '../../../components/common/subtitle/index.jsx';
import Sidebar from '../../../components/common/sidebar/index.jsx';
import HeadLess from '../../../components/common/headLess/index.jsx';

export default ( props ) => (
    <div>
        <div className='video'>
        <Sidebar />
        <HeadLess />
            <div className='videoC'>
            <iframe src="https://www.youtube.com/embed/c9cTIjBqFTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Subtitle />
            </div>
        </div>
    </div>
)