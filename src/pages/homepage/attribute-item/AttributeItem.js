import React, { useMemo } from 'react';
import { Button } from '../../../common';
import { getModifiers } from '../../../utils/attributes.utils';

function AttributeItem({ className, attribute, points = 0, onChange }) {
  const modifiers = useMemo(() => getModifiers(points), [points]);
  const handleIncreaseModifier = () => {
    onChange(attribute, points + 1);
  };

  const handleDecreaseModifier = () => {
    onChange(attribute, points - 1);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex me-4">
        <span className="me-1">{attribute}:</span>
        <span className="me-2">{points}</span>
        <span className="flex">(Modifier: {modifiers})</span>
      </div>
      <Button onClick={handleIncreaseModifier} className="me-1">
        +
      </Button>
      <Button onClick={handleDecreaseModifier} disabled={points === 0}>
        -
      </Button>
    </div>
  );
}

export default AttributeItem;
