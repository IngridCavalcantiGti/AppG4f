import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OrganizationScreen from '../src/screens/OrganizationScreen/OrganizationScreen';

describe('OrganizationScreen', () => {
  it('should render the full organization list initially', () => {
    const { getByText } = render(<OrganizationScreen />);

    expect(getByText('Consultar Organização')).toBeTruthy();
    expect(getByText('Organização Alpha')).toBeTruthy();
    expect(getByText('Beta Institute')).toBeTruthy();
    expect(getByText('ONG Gama')).toBeTruthy();
  });

  it('should filter results when typing in the search input', () => {
    const { getByPlaceholderText, queryByText } = render(<OrganizationScreen />);
    const input = getByPlaceholderText('Digite o nome da organização...');

    fireEvent.changeText(input, 'alpha');

    expect(queryByText('Organização Alpha')).toBeTruthy();
    expect(queryByText('Beta Institute')).toBeNull();
  });

  it('should display a message when no organization is found', () => {
    const { getByPlaceholderText, getByText } = render(<OrganizationScreen />);
    const input = getByPlaceholderText('Digite o nome da organização...');

    fireEvent.changeText(input, 'not found');

    expect(getByText('Nenhuma organização encontrada.')).toBeTruthy();
  });
});
