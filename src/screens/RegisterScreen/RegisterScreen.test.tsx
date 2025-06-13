import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './RegisterScreen';

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
        }),
    };
});


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                results: [
                    {
                        name: { first: 'Alice', last: 'Silva' },
                        phone: '11 99999-9999',
                        picture: { thumbnail: 'https://example.com/image.jpg' },
                    },
                ],
            }),
    })
) as jest.Mock;

describe('RegisterScreen', () => {
    it('renders search input and FAB', async () => {
        const { getByPlaceholderText, getByText } = render(
            <NavigationContainer>
                <RegisterScreen />
            </NavigationContainer>
        );

        expect(getByPlaceholderText('Procurar')).toBeTruthy();
        expect(getByText('+')).toBeTruthy();
    });

    it('displays user after fetch', async () => {
        const { findByText } = render(
            <NavigationContainer>
                <RegisterScreen />
            </NavigationContainer>
        );


        const userName = await findByText('Alice Silva');
        expect(userName).toBeTruthy();
    });

    it('filters list based on input', async () => {
        const { getByPlaceholderText, findByText, queryByText } = render(
            <NavigationContainer>
                <RegisterScreen />
            </NavigationContainer>
        );

        await findByText('Alice Silva');

        const input = getByPlaceholderText('Procurar');
        fireEvent.changeText(input, 'bob');

        await waitFor(() => {
            expect(queryByText('Alice Silva')).toBeNull();
        });
    });
});
