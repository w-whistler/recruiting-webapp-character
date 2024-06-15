import React, { useMemo, useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST } from '../../consts';
import AttributeItem from './attribute-item/AttributeItem';
import ClassItem from './class-item/ClassItem';
import MinimumRequirements from './minimum-requirements/MinimumRequirements';
import useAttributes from '../../hooks/useAttributes';
import Skills from './skills/Skills';

function Homepage() {
  const { attributePoints, onChangeAttributePoint } = useAttributes();
  const [selectedClassItem, setSelectedClassItem] = useState();

  const classListKeys = useMemo(() => Object.keys(CLASS_LIST), []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Skill Check</h1>
      </div>
      <div className="App-section pt-4">
        <div className="flex justify-evenly">
          <div className="border-white border flex-1">
            <h3 className="mb-2">Attributes</h3>
            <div className="flex flex-col items-center justify-center">
              {ATTRIBUTE_LIST.map((attribute) => (
                <AttributeItem
                  key={attribute}
                  className="mb-1"
                  attribute={attribute}
                  points={attributePoints[attribute]}
                  onChange={onChangeAttributePoint}
                />
              ))}
            </div>
          </div>
          <div className="border-white border flex-1">
            <h3 className="mb-2">Classes</h3>
            <div className="flex flex-col items-center justify-center">
              {classListKeys.map((classItem) => (
                <ClassItem
                  key={classItem}
                  classItem={classItem}
                  attributePoints={attributePoints}
                  onClick={() => setSelectedClassItem(classItem)}
                />
              ))}
            </div>
          </div>
          {selectedClassItem && (
            <MinimumRequirements
              selectedClassItem={selectedClassItem}
              onClose={() => setSelectedClassItem(undefined)}
            />
          )}
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
