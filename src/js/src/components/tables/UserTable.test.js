import React from 'react';
// import ReactDOM from 'react-dom';
import { render, getByTestId } from "@testing-library/dom";
import UserTable from "./UserTable";
//
// describe("UserTable", () => {
//     it("should exist", () => {
//         const { container } = ReactDOM.render(<UserTable/>);
//         expect(getByTestId(container, "test-usertable-id")).toBeTruthy();
//     })
// })

describe('gets users', () => {
    test('gets users when component is mounted and displays them', async () => {
        const { container, getByTestId } = render(<UserTable users={usersState.users} />);
        await flushPromises();
        const listOfUsers = getByTestId('todos-ul');
        expect(unorderedListOfTodos.children.length).toBe(2);
    });
});