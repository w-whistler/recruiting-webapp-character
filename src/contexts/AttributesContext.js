import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';
import {
  getModifiers,
  initializeAttributePoints,
} from '../utils/attributes.utils';
import { USERNAME } from '../consts';

const AttributesContext = createContext(undefined);

const initialAttributePoints = initializeAttributePoints();

function AttributesProvider({ children }) {
  const [attributePoints, setAttributePoints] = useState(
    initialAttributePoints,
  );
  const [skillPoints, setSkillPoints] = useState({});
  const [availableSkills, setAvailableSkills] = useState(10);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios.get(`/${USERNAME}/character`);

      const attrPoints = res.data?.body?.attributePoints;

      if (attrPoints) {
        setAttributePoints(attrPoints);

        setAvailableSkills(
          10 + Math.max(0, getModifiers(attrPoints.Intelligence)) * 4,
        );
      }

      setSkillPoints(res.data?.body?.skillPoints || {});
    };

    getCharacter();
  }, []);

  const onUpdateCharacter = useCallback(async () => {
    await axios.post(`/${USERNAME}/character`, {
      attributePoints,
      skillPoints,
    });
  }, [attributePoints, skillPoints]);

  const onChangeAttributePoint = useCallback(
    async (attribute, value) => {
      const updatedAttributePoints = { ...attributePoints, [attribute]: value };
      setAttributePoints(updatedAttributePoints);

      if (attribute === 'Intelligence') {
        setAvailableSkills(10 + Math.max(0, getModifiers(value)) * 4);
      }

      onUpdateCharacter();
    },
    [attributePoints, onUpdateCharacter],
  );

  const onChangeSkillPoint = useCallback(
    async (skill, value) => {
      const updatedSkillPoints = { ...skillPoints, [skill]: value };
      setSkillPoints(updatedSkillPoints);

      onUpdateCharacter();
    },
    [onUpdateCharacter, skillPoints],
  );

  const values = useMemo(
    () => ({
      attributePoints,
      skillPoints,
      availableSkills,
      onChangeAttributePoint,
      onChangeSkillPoint,
    }),
    [
      attributePoints,
      availableSkills,
      skillPoints,
      onChangeAttributePoint,
      onChangeSkillPoint,
    ],
  );

  return (
    <AttributesContext.Provider value={values}>
      {children}
    </AttributesContext.Provider>
  );
}

export { AttributesContext };
export default AttributesProvider;
