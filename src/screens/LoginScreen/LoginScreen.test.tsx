import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('LoginScreen', () => {
  it('renders login and password input fields', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    expect(getByPlaceholderText('Login')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
  });

  it("triggers navigation when 'ENTRAR' button is pressed", () => {
    const { getByText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    const button = getByText('ENTRAR');
    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
