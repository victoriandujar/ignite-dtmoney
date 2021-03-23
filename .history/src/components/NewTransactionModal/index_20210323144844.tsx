import React from 'react'

import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal() {
    return (
        <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
            >
            <h1>Cadastrar transação</h1>
      </Modal>
    )
}
