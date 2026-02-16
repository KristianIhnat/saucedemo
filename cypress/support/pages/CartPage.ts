import { BasePage } from './BasePage';
import { SELECTORS } from '../selectors';

/**
 * Page Object for the Shopping Cart Page
 */
export class CartPage extends BasePage {
    private readonly selectors = SELECTORS.cart;

    /**
     * Verify the cart page is loaded
     */
    verifyPageLoaded(): void {
        this.verifyUrlContains('/cart.html');
    }

    /**
     * Verify item quantity in cart
     */
    verifyItemQuantity(expectedQuantity: number): this {
        this.getByTestId(this.selectors.itemQuantity)
            .should('have.text', expectedQuantity.toString());
        return this;
    }

    /**
     * Verify item name in cart
     */
    verifyItemName(expectedName: string): this {
        this.getByTestId(this.selectors.itemName)
            .should('have.text', expectedName);
        return this;
    }

    /**
     * Get the number of items in the cart
     */
    getCartItemCount(): Cypress.Chainable<number> {
        return this.getByTestId(this.selectors.cartItem).its('length');
    }

    /**
     * Click checkout button to proceed to checkout
     */
    proceedToCheckout(): void {
        this.getByTestId(this.selectors.checkoutButton).click();
    }

    /**
     * Click continue shopping to go back to inventory
     */
    continueShopping(): void {
        this.getByTestId(this.selectors.continueShoppingButton).click();
    }

    /**
     * Remove item from cart
     */
    removeItem(): this {
        this.getByTestId(this.selectors.removeButton).click();
        return this;
    }
}

export const cartPage = new CartPage();

