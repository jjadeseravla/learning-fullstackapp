//if it renders
//call userTable, pass in 0 users (an empty array)
//then pass in 1-2 users and check to see if it renders users
//mock edit button
//mock delete button
//check when user clicks that these buttons are called - just get the first row etc

import React from 'react';
import {render, getByTestId, fireEvent, within } from '@testing-library/react';
import UserTable from "./UserTable";

describe ("UserTable", () => {
    it("should render UserTable component", () => {
        const { container } = render(<UserTable users={[]}/>); //has to be 'users' prop as line 17 in userTable is passing props.users
        const appTable = getByTestId(container, "app-table");

        expect(appTable).toBeDefined();
    });

    it("when UserTable is called, it should give back the empty table (an empty array as 0 users were passed in", () => {
        const { getByText } = render(<UserTable users={[]}/>); //just searches for any text in the component
        // const appTable = getByTestId(container, "app-table");
        // const { getByText } = within(getByTestId('app-table'))  ;

        expect(getByText('No users found')).toBeInTheDocument();
    });

    it("should render 1 user in the UserTable when 1 user is passed in", () => {
        const users = [
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }
        ];

        const { container } = render(<UserTable users={users}/>);
        const userIdRow = getByTestId(container, "123");
        const userRowName = getByTestId(userIdRow, "app-name");
        const userRowGender = getByTestId(userIdRow, "app-gender");
        const userRowDateOfBirth = getByTestId(userIdRow, "app-dateofBirth");

        //https://testing-library.com/docs/dom-testing-library/example-intro
        expect(userRowName).toHaveTextContent("testName");
        expect(userRowGender).toHaveTextContent("MALE");
        expect(userRowDateOfBirth).toHaveTextContent("1999");
    });

    it("should show the edit form when the edit button is pushed for a user", () => {
        const users = [
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }
        ];
        const mockOpenForm = jest.fn();

        const {container} = render(<UserTable users={users} showEditForm={mockOpenForm}/>); //showEditForm is what it has to be called as it has to be the name of the prop

        const userTableEditButton = getByTestId(container, "userTable-EditButton");

        fireEvent.click(userTableEditButton);

        expect(userTableEditButton).toBeDefined();
        expect(mockOpenForm).toHaveBeenCalled();
    });

    it("should delete a user when the delete button for that user is pushed", () => {
        //add a user to array of props
        const users = [
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }
        ];

        const mockDeleteUser = jest.fn();

        const {container} = render(<UserTable users={users} deleteAUser={mockDeleteUser}/>);

        const userTableDeleteButton = getByTestId(container, "userTable-DeleteButton");

        fireEvent.click(userTableDeleteButton);

        expect(userTableDeleteButton).toBeDefined();
        expect(mockDeleteUser).toHaveBeenCalled();
        //integration test to test state has been updated, eg: expect [] .toBe 0 and "no users found"
    });
})