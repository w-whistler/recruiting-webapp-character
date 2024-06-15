import { useContext } from 'react';
import { AttributesContext } from '../contexts/AttributesContext';

function useAttributes() {
  const context = useContext(AttributesContext);

  if (context === undefined) {
    throw new Error('useAttributes must be used within an AttributesContext');
  }

  return context;
}

export default useAttributes;
