import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; // importante
import RegisterClientScreen from './RegisterClientScreen';

describe('RegisterClientScreen', () => {
  it('renders the title and inputs', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterClientScreen />);

    expect(getByText('Cadastrar Cliente')).toBeTruthy();
    expect(getByPlaceholderText('Nome completo')).toBeTruthy();
    expect(getByPlaceholderText('Telefone')).toBeTruthy();
    expect(getByText('Adicionar Foto')).toBeTruthy();
    expect(getByText('Salvar')).toBeTruthy();
  });

  it('disables save button when fields are empty', () => {
    const { getByTestId } = render(<RegisterClientScreen />);
    const saveButton = getByTestId('save-button');
    expect(saveButton).toBeDisabled();
  });

  it('enables save button when fields are filled and triggers submit', () => {
    const { getByPlaceholderText, getByTestId } = render(<RegisterClientScreen />);
    const nameInput = getByPlaceholderText('Nome completo');
    const phoneInput = getByPlaceholderText('Telefone');
    const saveButton = getByTestId('save-button');

    fireEvent.changeText(nameInput, 'João');
    fireEvent.changeText(phoneInput, '81999998888');

    expect(saveButton).toBeEnabled();

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.press(saveButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      name: 'João',
      phone: '81999998888',
    });

    consoleSpy.mockRestore();
  });
});
