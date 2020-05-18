//if it renders
//call userTable, pass in 0 users (an empty array)
//then pass in 1-2 users and check to see if it renders users
//mock edit button
//mock delete button
//check when user clicks that these buttons are called - just get the first row etc

import React from 'react';
import {render, getByTestId, fireEvent, MouseEvent } from '@testing-library/react';
import UserTable from "./UserTable";

describe ("UserTable", () => {
    it("should render UserTable component", () => {
        const { container } = render(<UserTable usersStateObject={[]}/>);
        const appTable = getByTestId(container, "app-table");

        expect(appTable).toBeDefined();
    });

    it("when UserTable is called, it should give back the empty table (an empty array as 0 users were passed in", () => {
        //should return string "No users found"
    });

    it("should render 1 user in the UserTable when 1 user is passed in", () => {
        const users = [
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                age:20

            }
        ]

        //props.add?
    });

    it("should show the edit form when the edit button is pushed for a user", () => {
        const mockOpenForm = jest.fn();

        const {container} = render(<UserTable closeForm={mockOpenForm}/>);

        const userTableEditButton = getByTestId(container, "userTableEditButton");

        fireEvent.click(userTableEditButton);

        expect(userTableEditButton).toBeDefined();
        expect(mockOpenForm).toHaveBeenCalled();
    });

    it("should delete a user when the delete button for that user is pushed", () => {
        //add a user to array of state

        //check array has length of 1

        const mockDeleteUser = jest.fn();

        const {container} = render(<UserTable deleteAUser={mockDeleteUser}/>);

        const userTableDeleteButton = getByTestId(container, "userTableDeleteButton");

        fireEvent.click(userTableDeleteButton);

        expect(userTableDeleteButton).toBeDefined();
        expect(mockOpenForm).toHaveBeenCalled();
        //expect [] .toBe 0 and "no users found"
    });
})