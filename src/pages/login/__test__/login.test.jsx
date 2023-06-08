import React from "react";
import {render, screen} from "@testing-library/react";
import Login from "../index";
import { Provider } from 'react-redux'
import store from "../../../store/index";
import { BrowserRouter } from "react-router-dom";


const MockLogin = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Login />
            </Provider>
        </BrowserRouter>
    )
}

describe("Login" , () => {
    it("Checking the heading of the login page", async () => {
        render(<MockLogin />);
        const formHeading = screen.getByText(/Login to continue/i);
        expect(formHeading).toBeInTheDocument();
    });

    it("Checking the email field", async () => {
        render(<MockLogin />);
        const emailInput = screen.getByTestId("email");
        expect(emailInput).toBeInTheDocument();
    });

    it("Checking the password fields", async() => {
        render(<MockLogin />);
        const passInput = screen.getByTestId("password");
        expect(passInput).toBeInTheDocument();
    });

    it("Checking the anchor tag", async () => {
        render(<MockLogin />);
        const anchorElement = screen.getByText(/Forgot Password?/i);
        expect(anchorElement).toBeInTheDocument();
    });

    it("Checking the submit button", async () => {
        render(<MockLogin />);
        const submitBtnElement = screen.getByTestId("submit");
        expect(submitBtnElement).toBeInTheDocument();
    });
})