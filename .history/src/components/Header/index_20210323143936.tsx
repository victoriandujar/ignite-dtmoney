import React from 'react';

import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header() {
    return(
        <Container>
          <Content>
            <img src={Logo} alt="logo dt money" />
            <button 
            type="button" 
            onClick={handleOpenNewTransactionModal}
            >
                Nova transação
            </button>
          </Content>
        </Container>
    );
}