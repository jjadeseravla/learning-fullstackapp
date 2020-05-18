import React from 'react';
import {render, getByTestId, fireEvent, cleanup} from '@testing-library/react';
import EditUserForm from "./EditUserForm";

describe("EditUserForm", () => {

    it("renders out the 3 fields (name, gender, age)", () => {
        const {container} = render(<EditUserForm currentUser={{}}/>);

        const appEditName = getByTestId(container, "app-editName");
        const appEditGender = getByTestId(container, "app-editGender");
        const appEditAge = getByTestId(container, "app-editAge");

        expect(appEditName).toBeDefined();
        expect(appEditGender).toBeDefined();
        expect(appEditAge).toBeDefined();
    })

    it("should be able to input a user's name", () => {
        const {container} = render(<EditUserForm currentUser={{}}/>);

        const appEditName = getByTestId(container, "app-editName");
        //want to fire change event on this field:
        //field name is called value
        //mocking the default structure that an input field would give back
        //https://testing-library.com/docs/example-input-event
        fireEvent.change(appEditName, {target: {value: "edited string"}})

        expect(appEditName.value).toBe("edited string");
    })

    it("can click on the Edit New User button and that the mock was called with the adequate parameters", () => {
        const mockEditAUser = jest.fn();

        const {container} = render(<EditUserForm currentUser={{}} editAUser={mockEditAUser}/>);
        const appEditName = getByTestId(container, "app-editName");
        const appEditGender = getByTestId(container, "app-editGender");

        const appEditAge = getByTestId(container, "app-editAge");

        const editUserButton = getByTestId(container, "editUserButton");

        fireEvent.change(appEditName, {target: {value: "edited random string"}})
        fireEvent.change(appEditGender, {target: {value: "MALE"}})
        fireEvent.change(appEditAge, {target: {value: 37}})

        fireEvent.click(editUserButton);

        expect(editUserButton).toBeDefined();
        expect(mockEditAUser).toHaveBeenCalled();
        expect(mockEditAUser).toHaveBeenCalledWith({
            "age": "37",
            "gender": "MALE",
            "name": "edited random string",
        });
    });

    it("should hide the edit form when the cancel button is pushed", () => {
         const mockCloseForm = jest.fn();
        // const mockCloseForm = () => {
        //     console.log("beautiful angel")
        // }

        const {container} = render(<EditUserForm currentUser={{}} closeForm={mockCloseForm}/>);

        const editCancelButton = getByTestId(container, "editCancelButton");

        fireEvent.click(editCancelButton);

        expect(editCancelButton).toBeDefined();
        expect(mockCloseForm).toHaveBeenCalled();
    })

});
