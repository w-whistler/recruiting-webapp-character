import React from 'react';
import AttributesProvider from '../contexts/AttributesContext';

function AppProviders({ children }) {
  return <AttributesProvider>{children}</AttributesProvider>;
}

export default AppProviders;
