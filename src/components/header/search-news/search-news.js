import React from 'react';
import './search-news.scss';

const SearchNews = () => {
    return (
        <form className={'search_string'} action={'/category'}>
            <input type="hidden" name="name" value="search"/>
            <input type="text" name="search_text" placeholder="Поиск..."/>
            <button type="submit">
                <i className={'fa fa-search'}></i>
            </button>
        </form>
    )
}

export default SearchNews;