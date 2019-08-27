import React from 'react';

import TechList from '~/components/TechList';

import { render, fireEvent } from '@testing-library/react-native';

describe('TechList', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'React Native');
    fireEvent.press(getByText('Add'));

    expect(getByText('React Native')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});