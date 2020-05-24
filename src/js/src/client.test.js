//will be vanilla js not react
import {getAllUsers, insertNewUser, updateUser, deleteUser} from "./client";
import fetch from 'unfetch';

//mock unfetch library
jest.mock('unfetch', () => { //when we use this module, replace it with our mock
    return jest.fn();
})

describe("getAllUsers" ,() => {

    it("should make GET request for users", () => {
        getAllUsers();
        expect(fetch).toHaveBeenCalledWith('/api/v1/users');
    });

    it("should make POST request for users", () => {
        const userToInsert =
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }

        insertNewUser(userToInsert);
        expect(fetch).toHaveBeenCalledWith('/api/v1/users', {
            "body":      JSON.stringify({
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }),
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "POST"
        });
    });

    it("should make UPDATE request for users", () => {
        const userToUpdate =
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }
        updateUser(userToUpdate);
        expect(fetch).toHaveBeenCalledWith('/api/v1/users/123', {
            "body":      JSON.stringify({
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }),
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "POST"
        });
    });

    it("should make DELETE request for users", () => {
        const userToBeDeleted =
            {
                userId: "123",
                name: "testName",
                gender:"MALE",
                dateofBirth:1999

            }
        deleteUser(userToBeDeleted.userId);
        expect(fetch).toHaveBeenCalledWith('/api/v1/users/123', {"method": "DELETE"});
    });

})



