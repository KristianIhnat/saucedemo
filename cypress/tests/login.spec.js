describe('Login functionality', () => {
    it('logs in successfully with valid credentials', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
    })

    it('shows error messages for invalid login', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Username is required')

        cy.get('#user-name').type('wrong_user')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Password is required')

        cy.get('#password').type('wrong_password')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')

        cy.get('#user-name').clear().type('locked_out_user')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', ' Sorry, this user has been locked out')
    })
})