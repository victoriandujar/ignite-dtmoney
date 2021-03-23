import React from 'react'

import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            >
            <h1>Cadastrar transação</h1>
      </Modal>
    )
}
