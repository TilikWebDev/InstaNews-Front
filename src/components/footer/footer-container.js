import React, { useState } from 'react';
import Footer from './footer';

const FooterContainer = () => {
    const [category] = useState([
        { name: 'Политика', link: 'polytics' },
        { name: 'Экономика', link: 'economics' },
        { name: 'Проишествия', link: 'actions' },
        { name: 'Общество', link: 'society' },
        { name: 'Киевские новости', link: 'kiev' },
        { name: 'Технологии', link: 'technologies' },
        { name: 'Наука', link: 'science' },
        { name: 'Авто', link: 'auto' },
        { name: 'Спорт', link: 'sport' },
        { name: 'Здоровье', link: 'health' },
        { name: 'Шоу-бизнес', link: 'showbusiness' },
        { name: 'За рубежом', link: 'abroad' },
        { name: 'Курьезы', link: 'curiosities' }
    ]);
    return (
        <Footer data={category}/>
    );
}

export default React.memo(FooterContainer);