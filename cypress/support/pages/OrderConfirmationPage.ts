import { BasePage } from './BasePage';
import { SELECTORS } from '../selectors';

/**
 * Page Object for the Order Confirmation Page
 */
export class OrderConfirmationPage extends BasePage {
    private readonly selectors = SELECTORS.orderConfirmation;

    /**
     * Verify the confirmation page is loaded
     */
    verifyPageLoaded(): void {
        this.verifyUrlContains('/checkout-complete.html');
    }

    /**
     * Verify the order completion header message
     */
    verifyOrderComplete(expectedMessage: string = 'Thank you for your order!'): void {
        this.getByTestId(this.selectors.completeHeader)
            .should('be.visible')
            .and('have.text', expectedMessage);
    }

    /**
     * Click back to products button
     */
    goBackToProducts(): void {
        this.getByTestId(this.selectors.backHomeButton).click();
    }
}

export const orderConfirmationPage = new OrderConfirmationPage();

