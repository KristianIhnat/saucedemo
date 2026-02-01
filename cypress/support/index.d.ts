/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>>
        loginAs(userKey: string): Cypress.Chainable<JQuery<HTMLElement>>
    }
}