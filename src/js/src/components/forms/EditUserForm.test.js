import React from 'react';
import {render, getByTestId, fireEvent, cleanup} from '@testing-library/react';
import EditUserForm from "./EditUserForm";

describe("EditUserForm" ,() => {

    it("renders out the 3 fields (name, gender, age)", () => {
        const { container } = render(<AddUserForm/>);

        const appEditName = getByTestId(container, "app-addName");
        const appEditGender = getByTestId(container, "app-addGender");
        const appEditAge = getByTestId(container, "app-addAge");

        expect(appAddName).toBeDefined();
        expect(appAddGender).toBeDefined();
        expect(appAddAge).toBeDefined();
    })

    it("should be able to input a user's name", () => {
        const { container } = render(<AddUserForm/>);

        const appAddName = getByTestId(container, "app-addName");
        //want to fire change event on this field:
        //field name is called value
        //mocking the default structure that an input field would give back
        //https://testing-library.com/docs/example-input-event
        fireEvent.change(appAddName, {target:{value: "a random string"}})

        expect(appAddName.value).toBe("a random string");
    })

    it("can click on the Add New User button", () => {
        const { container } = render(<AddUserForm/>);

        const addUserButton = getByTestId(container, "addUserButton");


    });
});
