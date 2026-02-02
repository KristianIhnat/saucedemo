beforeEach(() => {
    cy.loginAs('standardUser')
})

describe('Cart & Checkout', () => {
    it('add a product to the shopping cart and create order', () => {
        cy.getByTestId('add-to-cart-sauce-labs-backpack').click()
        cy.getByTestId('shopping-cart-link').click()
        cy.url().should('include', '/cart.html')
        cy.getByTestId('item-quantity').should('have.text', '1')
        cy.getByTestId('inventory-item-name').should('have.text', 'Sauce Labs Backpack')
        cy.getByTestId('checkout').click()
        cy.getByTestId('firstName').type('Sherlock')
        cy.getByTestId('lastName').type('Holmes')
        cy.getByTestId('postalCode').type('4321')
        cy.getByTestId('continue').click()
        cy.getByTestId('finish').click()
        cy.getByTestId('complete-header')
            .should('have.text', 'Thank you for your order!')
    })

    it('shows error messages for invalid checkout information', () => {
        cy.getByTestId('add-to-cart-sauce-labs-backpack').click()
        cy.getByTestId('shopping-cart-link').click()
        cy.getByTestId('checkout').click()
        cy.getByTestId('continue').click()
        cy.getByTestId('error').should('contain', 'First Name is required')

        cy.getByTestId('firstName').type('Sherlock')
        cy.getByTestId('continue').click()
        cy.getByTestId('error').should('contain', 'Last Name is required')

        cy.getByTestId('lastName').type('Holmes')
        cy.getByTestId('continue').click()
        cy.getByTestId('error').should('contain', 'Postal Code is required')
    })
})