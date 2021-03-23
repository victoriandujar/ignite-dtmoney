import React, { useState, FormEvent } from 'react'

import Modal from 'react-modal';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');  

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }
  
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
    
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input placeholder="Título"/>

            <input type="number" placeholder="Valor"/>

            <TransactionTypeContainer>
              <RadioBox 
              type="button" 
              onClick={() => setType('deposit') }
              isActive={type === 'deposit'}
              activeColors="green"
              >
                <img src={IncomeImg} alt="Entrada"/>
                <span>Entrada</span>
              </RadioBox>

              <RadioBox 
              type="button" 
              onClick={() => setType('withdraw') }
              isActive={type === 'withdraw'}
              activeColors="red"
              >
                <img src={OutcomeImg} alt="Saída"/>
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeContainer>

            <input placeholder="Categoria"/>

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}
