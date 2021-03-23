import React from 'react'

import Modal from 'react-modal';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >

        <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
        >
          <img src={CloseImg} alt="Fechar modal"/>
        </button>
    
        <Container>
            <h2>Cadastrar transação</h2>

            <input placeholder="Título"/>

            <input type="number" placeholder="Valor"/>

            <TransactionTypeContainer>
              <button type="button">
                <img src={IncomeImg} alt="Entrada"/>
                <span>Entrada</span>
              </button>

              <button type="button">
                <img src={OutcomeImg} alt="Saída"/>
                <span>Saída</span>
              </button>
            </TransactionTypeContainer>

            <input placeholder="Categoria"/>

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}
