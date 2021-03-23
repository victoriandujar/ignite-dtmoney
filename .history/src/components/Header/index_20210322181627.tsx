import React from 'react';

import Logo from '../../assets/logo.svg';

export function Header() {
    return(
        <header>
            <img src={Logo} alt="" />
            <button type="button">Nova transação</button>
        </header>
    );
}