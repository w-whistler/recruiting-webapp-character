import { getModifiers, initializeAttributePoints } from './attributes.utils';

describe('Attributes Utility Functions', () => {
  describe('getModifiers', () => {
    it('points is 7', () => {
      expect(getModifiers(7)).toBe(-2);
    });

    it('points is 9', () => {
      expect(getModifiers(9)).toBe(-1);
    });

    it('points is 10', () => {
      expect(getModifiers(10)).toBe(0);
    });

    it('points is 11', () => {
      expect(getModifiers(11)).toBe(0);
    });

    it('points is 12', () => {
      expect(getModifiers(12)).toBe(1);
    });

    it('points is 14', () => {
      expect(getModifiers(14)).toBe(2);
    });

    it('points is 20', () => {
      expect(getModifiers(20)).toBe(5);
    });
  });

  describe('initializeAttributePoints', () => {
    it('returns data', () => {
      expect(initializeAttributePoints()).toEqual({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
      });
    });
  });
});
