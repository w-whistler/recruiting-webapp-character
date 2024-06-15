import React, { useMemo } from 'react';
import { CLASS_LIST } from '../../../consts';
import { Button } from '../../../common';

function MinimumRequirements({ selectedClassItem, onClose }) {
  const requirements = useMemo(
    () => CLASS_LIST[selectedClassItem],
    [selectedClassItem],
  );

  return (
    <div className="border-white border flex-1">
      <h3 className="mb-2">{selectedClassItem} Minimum Requirements</h3>
      {Object.entries(requirements).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
      <Button className="mt-2" onClick={onClose}>
        Close Requirement View
      </Button>
    </div>
  );
}

export default MinimumRequirements;
