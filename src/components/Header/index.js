import React from 'react';
import UserInfo from '../UserInfo'
import Theme from './Theme'
import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <UserInfo />
            <Theme />
        </header>
    );
};

export default Header;