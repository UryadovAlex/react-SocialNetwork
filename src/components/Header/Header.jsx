import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://www.forward.bank/wp-content/themes/BankSiteResponsive_2017/img/logo.png' />
        </header>
    );
}

export default Header;