describe('Login functionality', () => {
    it('logs in successfully with valid credentials', () => {
        cy.visit('https://www.saucedemo.com')
        cy.getByTestId('username').type('standard_user')
        cy.getByTestId('password').type('secret_sauce')
        cy.getByTestId('login-button').click()
        cy.url().should('include', '/inventory.html')
    })

    it('shows error messages for invalid login', () => {
        cy.visit('https://www.saucedemo.com')
        cy.getByTestId('login-button').click()
        cy.getByTestId('error').should('contain', 'Username is required')

        cy.getByTestId('username').type('invalid user')
        cy.getByTestId('login-button').click()
        cy.getByTestId('error').should('contain', 'Password is required')

        cy.getByTestId('password').type('invalid password')
        cy.getByTestId('login-button').click()
        cy.getByTestId('error').should('contain', 'Username and password do not match')

        cy.getByTestId('username').clear().type('locked_out_user')
        cy.getByTestId('password').clear().type('secret_sauce')
        cy.getByTestId('login-button').click()
        cy.getByTestId('error').should('contain', ' Sorry, this user has been locked out')
    })
})