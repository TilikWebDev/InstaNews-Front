import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMarquee } from '../../redux/header-reducer';
import Header from './header';

const HeaderContainer = ({getMarquee}) => {
    useEffect(() => {
        getMarquee();
    }, [getMarquee]);

    return (
        <Header/>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
};

export default connect(mapStateToProps, {
    getMarquee
})(HeaderContainer);