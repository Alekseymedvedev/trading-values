import React from 'react';
import cls from './header.module.scss'



const Header= () => {
    return (
        <header className={cls.header}>
            <h1>
                <span className={cls.title}>rOblox Adopt Me Trading Values 2022</span>
                <span className={cls.textTitle}>Win Fair Lose WFL</span>
            </h1>
        </header>
    );
};

export default Header;