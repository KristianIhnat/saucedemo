import { UserType, UsersFixture } from '../types';
import { loginPage } from '../pages';

/**
 * Login as a specific user type
 * This is a reusable function for test setup
 */
export function loginAs(userType: UserType): void {
    cy.fixture<UsersFixture>('users').then((users) => {
        const user = users[userType];

        if (!user) {
            throw new Error(`User type "${userType}" not found in users fixture`);
        }

        loginPage.visit();
        loginPage.login(user);
        loginPage.verifyLoginSuccess();
    });
}

/**
 * Login with explicit credentials
 */
export function loginWithCredentials(username: string, password: string): void {
    loginPage.visit();
    loginPage.loginWith(username, password);
}

