import './index.scss';

import React from 'react';
import News from '../news/news';

const Index = ({news}) => {
    return (
        <div className={'main_content'}>
            <div className={'row main'}>
                <News type={'main'} data={news.main}/>
            </div>
        </div>
    )
}

export default React.memo(Index);