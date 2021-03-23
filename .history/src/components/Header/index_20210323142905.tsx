import React, { useState } from 'react';

import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return(
        <Container>
            <Content>
                <img src={Logo} alt="logo dt money" />
                <button type="button">Nova transação</button>
            </Content>
        </Container>
    );
}