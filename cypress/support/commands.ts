import { UserType, UsersFixture } from './types';
import { loginPage } from './pages';

/**
 * Custom Cypress Commands
 * These extend the cy object with reusable commands
 */

/**
 * Custom command to login as a specific user type
 * @example cy.loginAs('standardUser')
 */
Cypress.Commands.add('loginAs', (userType: UserType) => {
    cy.fixture<UsersFixture>('users').then((users) => {
        const user = users[userType];

        if (!user) {
            throw new Error(`User type "${userType}" not found in users fixture`);
        }

        loginPage.visit();
        loginPage.login(user);
        loginPage.verifyLoginSuccess();
    });
});

/**
 * Custom command to get element by data-test attribute
 * @example cy.getByTestId('login-button')
 */
Cypress.Commands.add('getByTestId', (testId: string) => {
    return cy.get(`[data-test="${testId}"]`);
});

/**
 * Type declarations for custom commands
 */
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Login as a specific user type
             * @param userType - The type of user to login as
             * @example cy.loginAs('standardUser')
             */
            loginAs(userType: UserType): Chainable<void>;

            /**
             * Get element by data-test attribute
             * @param testId - The data-test attribute value
             * @example cy.getByTestId('login-button')
             */
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export {};

