import { getByTestId } from "../support/helpers/getByTestId";   
import { loginAs } from "../support/helpers/login";

beforeEach(() => {
    loginAs('standardUser')
})

describe('Cart & Checkout', () => {
    it('add a product to the shopping cart and create order', () => {
        getByTestId('add-to-cart-sauce-labs-backpack').click()
        getByTestId('shopping-cart-link').click()
        cy.url().should('include', '/cart.html')
        getByTestId('item-quantity').should('have.text', '1')
        getByTestId('inventory-item-name').should('have.text', 'Sauce Labs Backpack')
        getByTestId('checkout').click()
        getByTestId('firstName').type('Sherlock')
        getByTestId('lastName').type('Holmes')
        getByTestId('postalCode').type('4321')
        getByTestId('continue').click()
        getByTestId('finish').click()
        getByTestId('complete-header')
            .should('have.text', 'Thank you for your order!')
    })

    it('shows error messages for invalid checkout information', () => {
        getByTestId('add-to-cart-sauce-labs-backpack').click()
        getByTestId('shopping-cart-link').click()
        getByTestId('checkout').click()
        getByTestId('continue').click()
        getByTestId('error').should('contain', 'First Name is required')

        getByTestId('firstName').type('Sherlock')
        getByTestId('continue').click()
        getByTestId('error').should('contain', 'Last Name is required')

        getByTestId('lastName').type('Holmes')
        getByTestId('continue').click()
        getByTestId('error').should('contain', 'Postal Code is required')
    })
})