import { ATTRIBUTE_LIST } from '../consts';

function getModifiers(points) {
  return Math.floor((points - 10) / 2);
}

function initializeAttributePoints() {
  return ATTRIBUTE_LIST.reduce((attribute) => ({
    [attribute]: 10,
  }));
}

export { getModifiers, initializeAttributePoints };
