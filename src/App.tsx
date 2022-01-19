import { useState } from 'react'
import {GlobalStyle} from '../src/styles/global'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransitionModal} from './components/NewTransationModal';
import {TransactionsProvider} from './hooks/useTransactions'


export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModal] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModal(true)
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModal(false)
  }

  return (
    <TransactionsProvider>
     <Header
      onOpenNewTransationsModal={handleOpenNewTransactionsModal}
     />
     <Dashboard/>
      <NewTransitionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
     <GlobalStyle/>
    </TransactionsProvider>
  );
}
