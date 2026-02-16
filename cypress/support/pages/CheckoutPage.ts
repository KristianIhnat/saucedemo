import { BasePage } from './BasePage';
import { SELECTORS } from '../selectors';

/**
 * Customer information for checkout
 */
export interface CustomerInfo {
    firstName: string;
    lastName: string;
    postalCode: string;
}

/**
 * Page Object for the Checkout Pages
 */
export class CheckoutPage extends BasePage {
    private readonly selectors = SELECTORS.checkout;

    /**
     * Verify the checkout step one page is loaded
     */
    verifyPageLoaded(): void {
        this.verifyUrlContains('/checkout-step-one.html');
    }

    /**
     * Verify the checkout step two (overview) page is loaded
     */
    verifyOverviewPageLoaded(): void {
        this.verifyUrlContains('/checkout-step-two.html');
    }

    /**
     * Enter first name
     */
    enterFirstName(firstName: string): this {
        this.getByTestId(this.selectors.firstName)
            .clear()
            .type(firstName);
        return this;
    }

    /**
     * Enter last name
     */
    enterLastName(lastName: string): this {
        this.getByTestId(this.selectors.lastName)
            .clear()
            .type(lastName);
        return this;
    }

    /**
     * Enter postal code
     */
    enterPostalCode(postalCode: string): this {
        this.getByTestId(this.selectors.postalCode)
            .clear()
            .type(postalCode);
        return this;
    }

    /**
     * Fill all customer information
     */
    fillCustomerInfo(customerInfo: CustomerInfo): this {
        this.enterFirstName(customerInfo.firstName)
            .enterLastName(customerInfo.lastName)
            .enterPostalCode(customerInfo.postalCode);
        return this;
    }

    /**
     * Click continue button
     */
    clickContinue(): void {
        this.getByTestId(this.selectors.continueButton).click();
    }

    /**
     * Click cancel button
     */
    clickCancel(): void {
        this.getByTestId(this.selectors.cancelButton).click();
    }

    /**
     * Click finish button to complete order
     */
    clickFinish(): void {
        this.getByTestId(this.selectors.finishButton).click();
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
     * Complete checkout with customer info
     */
    completeCheckout(customerInfo: CustomerInfo): void {
        this.fillCustomerInfo(customerInfo);
        this.clickContinue();
        this.clickFinish();
    }
}

export const checkoutPage = new CheckoutPage();

