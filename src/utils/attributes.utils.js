import { ATTRIBUTE_LIST } from '../consts';

function getModifiers(points) {
  return Math.floor((points - 10) / 2);
}

function initializeAttributePoints() {
  return ATTRIBUTE_LIST.reduce(
    (prev, attribute) => ({
      ...prev,
      [attribute]: 10,
    }),
    {},
  );
}

export { getModifiers, initializeAttributePoints };
