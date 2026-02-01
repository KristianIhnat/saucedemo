/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getByTestId(testId: string): Chainable;
        loginAs(userKey: string): Chainable;
    }
}