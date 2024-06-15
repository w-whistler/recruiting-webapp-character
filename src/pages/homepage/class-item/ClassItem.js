import React, { useMemo } from 'react';
import classNames from 'classnames';
import { CLASS_LIST } from '../../../consts';

function ClassItem({ classItem, attributePoints, onClick }) {
  const isMeetRequirements = useMemo(() => {
    const modifierLimits = CLASS_LIST[classItem];
    return !Object.keys(modifierLimits).some(
      (key) => (attributePoints[key] || 0) < modifierLimits[key],
    );
  }, [classItem, attributePoints]);

  return (
    <div
      className={classNames(
        'cursor-pointer',
        isMeetRequirements ? 'text-red-500' : '',
      )}
      onClick={onClick}
    >
      {classItem}
    </div>
  );
}

export default ClassItem;
