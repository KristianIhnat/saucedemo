import { getByTestId } from "../support/helpers/getByTestId";

describe('Login functionality', () => {
    it('logs in successfully with valid credentials', () => {
        cy.visit('https://www.saucedemo.com')
        getByTestId('username').type('standard_user')
        getByTestId('password').type('secret_sauce')
        getByTestId('login-button').click()
        cy.url().should('include', '/inventory.html')
    })

    it('shows error messages for invalid login', () => {
        cy.visit('https://www.saucedemo.com')
        getByTestId('login-button').click()
        getByTestId('error').should('contain', 'Username is required')

        getByTestId('username').type('invalid user')
        getByTestId('login-button').click()
        getByTestId('error').should('contain', 'Password is required')

        getByTestId('password').type('invalid password')
        getByTestId('login-button').click()
        getByTestId('error').should('contain', 'Username and password do not match')

        getByTestId('username').clear().type('locked_out_user')
        getByTestId('password').clear().type('secret_sauce')
        getByTestId('login-button').click()
        getByTestId('error').should('contain', ' Sorry, this user has been locked out')
    })
})