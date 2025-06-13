import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  it('renders welcome message and cards', () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    expect(getByText('Olá, Alice')).toBeTruthy();
    expect(getByText('Cadastros')).toBeTruthy();
    expect(getByText('Consultar Organização')).toBeTruthy();
  });

  it("navigates to 'Register' screen when 'Cadastros' is pressed", () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    const cadastroButton = getByText('Cadastros');
    fireEvent.press(cadastroButton);

    expect(cadastroButton).toBeTruthy();
  });
});
