import React from 'react';
// import ReactDOM from 'react-dom';
// import DisplayPage from '../DisplayPage.js';
import {render, getByTestId, fireEvent, cleanup} from '@testing-library/react';
 import App from '../App'
 import DisplayPage from "./DisplayPage";
//
// afterEach(cleanup)
//
// it('Text in state is changed when button clicked', () => {
//     const { getByText } = render(<DisplayPage />);
//
//     expect(getByText(/Initial/i).textContent).toBe("Initial State")
//
//     fireEvent.click(getByText("State Change Button"))
//
//     expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
// })

describe("DisplayPage" ,() => {
    it("should have a title", () => {
        //given
        const title = "CRUD App of React Hooks and Java Backend";
        const { container } = render(<DisplayPage/>);
        //when
        const appTitle = getByTestId(container, "app-title");
        //then
        expect(appTitle.textContent).toBe(title);
    })
})