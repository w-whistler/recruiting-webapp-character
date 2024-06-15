import React, { useMemo } from 'react';
import { Button } from '../../../common';
import useAttributes from '../../../hooks/useAttributes';
import { getModifiers } from '../../../utils/attributes.utils';

function SkillItem({ skill }) {
  const { attributePoints, skillPoints, onChangeSkillPoint } = useAttributes();

  const skillAttributePoints = useMemo(
    () => attributePoints[skill.attributeModifier] || 0,
    [attributePoints, skill.attributeModifier],
  );

  const modifiers = useMemo(
    () => getModifiers(skillAttributePoints),
    [skillAttributePoints],
  );

  const handleChangeSkillPoint = (value) => {
    onChangeSkillPoint(skill.name, value);
  };

  const handleAddSkillPoint = () => {
    handleChangeSkillPoint((skillPoints[skill.name] || 0) + 1);
  };

  const handleRemoveSkillPoint = () => {
    handleChangeSkillPoint((skillPoints[skill.name] || 0) - 1);
  };

  return (
    <div className="flex flex-row justify-center mb-1">
      <div className="me-1">
        {skill.name}: {skillPoints[skill.name] || 0}
      </div>
      <div className="me-1">
        (Modifier: {skill.attributeModifier}): {modifiers}
      </div>
      <Button className="me-1" onClick={handleAddSkillPoint}>
        +
      </Button>
      <Button className="me-1" onClick={handleRemoveSkillPoint}>
        -
      </Button>
      <div>Total: {(skillPoints[skill.name] || 0) + modifiers}</div>
    </div>
  );
}

export default SkillItem;
