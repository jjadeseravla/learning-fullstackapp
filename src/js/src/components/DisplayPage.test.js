import React from 'react';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import DisplayPage from "./DisplayPage";
import UserTable from "./tables/UserTable";

describe("DisplayPage", () => {
    const fetchUsers = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<DisplayPage fetchUsers={fetchUsers}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    });

    it('shows default title text of each user', () => {
        // expect(wrapper.find('h2').text()).toEqual("View users");
        expect(wrapper.find('UserTable').text()).toEqual("IDNameGenderDOBNo users found");
    }) ;

    it('shows default text', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('UserTable').text()).toEqual({users: []})
    });
});


// // import ReactDOM from 'react-dom';
// import {render, getByTestId, fireEvent, cleanup, waitFor, screen} from '@testing-library/react';
// import App from '../App'
// import DisplayPage from "./DisplayPage";
// import UserTable from "./tables/UserTable";
// import fetch from 'unfetch'
//
// describe("DisplayPage", () => {
//
//     it('gets users when component is mounted and displays them', async () => {
//         const {container, getByTestId} = render(<App todoService={todoService}/>);
//         await flushPromises();
//         const unorderedListOfTodos = getByTestId('todos-ul');
//         expect(unorderedListOfTodos.children.length).toBe(2);
//     });
//
//     it("should have a title", () => {
//         //given
//         const title = "CRUD App of React Hooks and Java Backend";
//         const {container} = render(<DisplayPage/>);
//         //when
//         const appTitle = getByTestId(container, "app-title");
//         //then
//         expect(appTitle.textContent).toBe(title);
//     })
//
// })
//
// import React from "react";
// import { fetchUsers } from "./DisplayPage";
// import "whatwg-fetch";
// import { renderHook } from "@testing-library/react-hooks";
// import fetchMock from "fetch-mock";
// import { act } from "react-test-renderer";
//
// describe("DisplayPage", () => {
//     beforeAll(() => {
//         global.fetch = fetch;
//     });
//     afterAll(() => {
//         fetchMock.restore();
//     });
//
//     it("should return data with a successful api request", async () => {
//         const { result } = renderHook(() => fetchUsers());
//         // Tell the test that any request to 'test.com' should return 'returnedData: "foo"'
//         fetchMock.mock("test.com", {
//             returnedData: "foo"
//         });
//         // Calling the api via the `callApi` function
//         await act(async () => {
//             result.current.callApi("test.com");
//         });
//
//         // Check the 'data' state variable has the same mocked data from earlier
//         expect(result.current.data).toBe({
//             returnedData: "foo"
//         });
//     });
//});