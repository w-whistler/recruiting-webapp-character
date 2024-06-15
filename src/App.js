import React from 'react';
import './App.css';
import AppRoutes from './routing/AppRoutes';
import AppProviders from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
