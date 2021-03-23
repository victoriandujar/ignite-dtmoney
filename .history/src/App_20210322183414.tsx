import React from 'react';

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
