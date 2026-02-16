import { loginPage } from '../support/pages';
import { errorMessages } from '../support/data';

describe('Login Page', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    describe('Successful Login', () => {
        it('should login successfully with valid credentials', () => {
            loginPage.loginWith('standard_user', 'secret_sauce');
            loginPage.verifyLoginSuccess();
        });

        it('should login successfully using custom command', () => {
            cy.loginAs('standardUser');
            cy.url().should('include', '/inventory.html');
        });
    });

    describe('Login Validation', () => {
        it('should show error when username is missing', () => {
            loginPage.clickLogin();
            loginPage.verifyErrorMessage(errorMessages.login.usernameRequired);
        });

        it('should show error when password is missing', () => {
            loginPage
                .enterUsername('invalid_user')
                .clickLogin();
            loginPage.verifyErrorMessage(errorMessages.login.passwordRequired);
        });

        it('should show error for invalid credentials', () => {
            loginPage.loginWith('invalid_user', 'invalid_password');
            loginPage.verifyErrorMessage(errorMessages.login.invalidCredentials);
        });

        it('should show error for locked out user', () => {
            loginPage.loginWith('locked_out_user', 'secret_sauce');
            loginPage.verifyErrorMessage(errorMessages.login.lockedOut);
        });
    });
});
