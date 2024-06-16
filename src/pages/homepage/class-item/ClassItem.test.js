import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassItem from './ClassItem';

describe('ClassItem', () => {
  it('render correctly with invalid class item', () => {
    const classItemLabel = 'Test Class Item';
    const onClick = jest.fn();
    const attributePoints = {
      Strength: 15,
      Dexterity: 5,
      Constitution: 2,
      Intelligence: 4,
      Wisdom: 4,
      Charisma: 5,
    };

    render(
      <ClassItem
        classItem={classItemLabel}
        attributePoints={attributePoints}
        onClick={onClick}
      />,
    );

    expect(screen.getByText(classItemLabel)).toBeInTheDocument();
    expect(screen.getByText(classItemLabel)).toHaveClass('cursor-pointer');
    expect(screen.getByText(classItemLabel)).toHaveClass('text-red-500');
  });

  it('render correctly with valid class item and requirements not meet', () => {
    const classItemLabel = 'Barbarian';
    const onClick = jest.fn();
    const attributePoints = {
      Strength: 15,
      Dexterity: 5,
      Constitution: 2,
      Intelligence: 4,
      Wisdom: 4,
      Charisma: 5,
    };

    render(
      <ClassItem
        classItem={classItemLabel}
        attributePoints={attributePoints}
        onClick={onClick}
      />,
    );

    expect(screen.getByText(classItemLabel)).toBeInTheDocument();
    expect(screen.getByText(classItemLabel)).toHaveClass('cursor-pointer');
    expect(screen.getByText(classItemLabel)).not.toHaveClass('text-red-500');
  });

  it('render correctly with valid class item and requirements meet', () => {
    const classItemLabel = 'Barbarian';
    const onClick = jest.fn();
    const attributePoints = {
      Strength: 14,
      Dexterity: 9,
      Constitution: 9,
      Intelligence: 9,
      Wisdom: 9,
      Charisma: 9,
    };

    render(
      <ClassItem
        classItem={classItemLabel}
        attributePoints={attributePoints}
        onClick={onClick}
      />,
    );

    expect(screen.getByText(classItemLabel)).toBeInTheDocument();
    expect(screen.getByText(classItemLabel)).toHaveClass('cursor-pointer');
    expect(screen.getByText(classItemLabel)).toHaveClass('text-red-500');
  });

  it('render correctly without attribute points', () => {
    const classItemLabel = 'Barbarian';
    const onClick = jest.fn();

    render(
      <ClassItem
        classItem={classItemLabel}
        attributePoints={{}}
        onClick={onClick}
      />,
    );

    expect(screen.getByText(classItemLabel)).toBeInTheDocument();
    expect(screen.getByText(classItemLabel)).toHaveClass('cursor-pointer');
  });
});
