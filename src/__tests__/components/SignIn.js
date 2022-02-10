import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer'

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const fnMock = jest.fn();
            // render the SignInContainer component, fill the text inputs and press the submit button
            const { getByPlaceholderText, getByText } = render(<SignInContainer onSubmit={fnMock}/>);
            fireEvent.changeText(getByPlaceholderText("Username"), "kalle");
            fireEvent.changeText(getByPlaceholderText("Password"), "password");
            fireEvent.press(getByText("Sign in"));
            await waitFor(() => {
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(fnMock).toHaveBeenCalledTimes(1);
                expect(fnMock.mock.calls[0][0]).toEqual({username: "kalle", password: "password"});
            });
        });
    });
});
