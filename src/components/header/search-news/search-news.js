import { Field, Formik } from 'formik';
import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { validateInput } from '../../../assets/validators';
import './search-news.scss';

const SearchNews = (props) => {
    const history = useHistory();

    const initialValues = {
        search: ''
    }

    const onSubmit = (data, {resetForm}) => {
        history.push({pathname: `/category/search/${data.search}`});
        return resetForm();
    }

    return (
        <Formik initialValues={{...initialValues}} onSubmit={onSubmit}>
            {
                ({handleSubmit, ...props}) => (
                    <form onSubmit={handleSubmit} name={'search'} className={'search_string'}> 
                        <Field type="text" name="search" placeholder="Поиск..." value={props.values.search} validate={validateInput}/>

                        <button type={'submit'}>
                            <i className={'fa fa-search'}></i>
                        </button>
                    </form> 
                )
            }
        </Formik>
    )
}

export default SearchNews;