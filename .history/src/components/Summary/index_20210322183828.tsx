import React from 'react';

import IncomeImg from '../../assets/income.svg';

import { Container } from './styles';

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Income"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}