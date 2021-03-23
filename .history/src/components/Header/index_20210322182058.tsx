import React from 'react';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

export function Header() {
    return(
        <Container>
            <img src={Logo} alt="logo dt money" />
            <button type="button">Nova transação</button>
        </Container>
    );
}