import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  { AddUserForm } from './AddUserForm';

it('renders', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<AddUserForm/>)

    expect(queryByTestId("add-new-user-button")).toBeTruthy();
    expect(queryByPlaceholderText("Add New User")).toBeTruthy();
})