import { BasePage } from './BasePage';
import { SELECTORS } from '../selectors';
import { User } from '../types';

/**
 * Page Object for the Login Page
 */
export class LoginPage extends BasePage {
    private readonly selectors = SELECTORS.login;

    /**
     * Navigate to the login page
     */
    visit(): this {
        this.navigateTo('/');
        return this;
    }

    /**
     * Verify the login page is loaded
     */
    verifyPageLoaded(): void {
        this.getByTestId(this.selectors.loginButton).should('be.visible');
    }

    /**
     * Enter username
     */
    enterUsername(username: string): this {
        this.getByTestId(this.selectors.usernameInput)
            .clear()
            .type(username);
        return this;
    }

    /**
     * Enter password
     */
    enterPassword(password: string): this {
        this.getByTestId(this.selectors.passwordInput)
            .clear()
            .type(password);
        return this;
    }

    /**
     * Click the login button
     */
    clickLogin(): void {
        this.getByTestId(this.selectors.loginButton).click();
    }

    /**
     * Perform complete login with user credentials
     */
    login(user: User): void {
        this.enterUsername(user.username)
            .enterPassword(user.password)
            .clickLogin();
    }

    /**
     * Login with username and password strings
     */
    loginWith(username: string, password: string): void {
        this.enterUsername(username)
            .enterPassword(password)
            .clickLogin();
    }

    /**
     * Verify error message is displayed
     */
    verifyErrorMessage(expectedMessage: string): void {
        this.getByTestId(this.selectors.errorMessage)
            .should('be.visible')
            .and('contain', expectedMessage);
    }

    /**
     * Verify successful login by checking URL
     */
    verifyLoginSuccess(): void {
        this.verifyUrlContains('/inventory.html');
    }
}

export const loginPage = new LoginPage();

