import React from 'react';
import './index.scss';
import Sidebar from '../../../components/common/sidebar/index.jsx';
import HeadLess from '../../../components/common/headLess/index.jsx';
import Subtitle from '../../../components/common/subtitle/index.jsx';
import Textarea from '../../../components/common/text-area/index.jsx';

export default ( props ) => (
    <div>
        <div className='lesson'>
        <HeadLess />
        <Sidebar />
            <div className='content'>
                <Subtitle />
                <Textarea />
                <Textarea />
                <Textarea />
                <Textarea />
                <Textarea />
                <Textarea />
            </div>
        </div>
    </div>
)