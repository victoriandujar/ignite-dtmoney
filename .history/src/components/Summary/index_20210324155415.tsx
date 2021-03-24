import React, { useContext } from 'react';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.widthdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposits: 0,
        widthdraws: 0,
        total: 0,
    })

    console.log(transactions);
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entrada"/>
                </header>
                <strong>R${summary.deposits}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saida"/>
                </header>
                <strong>- R${summary.widthdraws}</strong>
            </div>

            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total"/>
                </header>
                <strong>R${summary.total}</strong>
            </div>
        </Container>
    );
}