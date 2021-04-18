import './footer.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({data}) => {
    return (
        <footer>
			<div className={'container'}>
				<h1 className={'logotype'}>
                    INSTA 
                    <div className={'logotype_color'}>NEWS</div>
                </h1>

				<div className={'map'}>
                    {
                        data.map((c, i) => <NavLink key={i} className={'map__cld'} to={`/category/${c.link}`}>{c.name}</NavLink>)
                    }
                </div>

				<p className={'text'}>
					Мы с огромным уважением относимся к конфиденциальной (персональной) информации всех без исключения лиц, посетивших Сайт instanews.com.ua (далее – Сайт), а также тех, кто пользуется предоставляемыми Сайтом сервисами; в связи с этим, Редакция Сайта стремится защищать конфиденциальность персональных данных, тем самым создав и обеспечив максимально комфортные условия использования сервисов Сайта любому и каждому Пользователю.
                </p>
			</div>

			<div className="copyright">
				<div className="container">
					© { new Date().getFullYear() } instanews.com.ua

					<span className={'developer'}>
						@TilikWebDeveloper
					</span>
				</div>
			</div>
		</footer>
    )
}

export default React.memo(Footer);