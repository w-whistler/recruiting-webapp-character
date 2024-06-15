import React from 'react';
import { SKILL_LIST } from '../../../consts';
import SkillItem from '../skill-item/SkillItem';
import useAttributes from '../../../hooks/useAttributes';

function Skills() {
  const { availableSkills } = useAttributes();

  return (
    <div className="border-white border flex-1">
      <h3 className="mb-2">Skills</h3>
      <h5 className="mb-2">Total skill points available: {availableSkills}</h5>
      <div>
        {SKILL_LIST.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
