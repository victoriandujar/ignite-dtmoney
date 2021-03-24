import React, { useContext } from 'react';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const transactions = useContext(TransactionsContext);

    console.log(transactions);
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entrada"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saida"/>
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}