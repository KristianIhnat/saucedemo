import { BasePage } from './BasePage';
import { SELECTORS } from '../selectors';

/**
 * Available product names for adding to cart
 */
export type ProductName =
    | 'backpack'
    | 'bikeLight'
    | 'boltTShirt'
    | 'fleeceJacket'
    | 'onesie';

/**
 * Page Object for the Inventory/Products Page
 */
export class InventoryPage extends BasePage {
    private readonly selectors = SELECTORS.inventory;

    private readonly productSelectors: Record<ProductName, string> = {
        backpack: this.selectors.addToCartBackpack,
        bikeLight: this.selectors.addToCartBikeLight,
        boltTShirt: this.selectors.addToCartBoltTShirt,
        fleeceJacket: this.selectors.addToCartFleeceJacket,
        onesie: this.selectors.addToCartOnesie,
    };

    /**
     * Verify the inventory page is loaded
     */
    verifyPageLoaded(): void {
        this.verifyUrlContains('/inventory.html');
        this.getByTestId(this.selectors.inventoryItem).should('have.length.at.least', 1);
    }

    /**
     * Add a product to the cart by product name
     */
    addProductToCart(product: ProductName): this {
        const selector = this.productSelectors[product];
        this.getByTestId(selector).click();
        return this;
    }

    /**
     * Get the shopping cart badge count
     */
    getCartBadgeCount(): Cypress.Chainable<string> {
        return this.getByTestId(this.selectors.shoppingCartBadge).invoke('text');
    }

    /**
     * Verify cart badge shows expected count
     */
    verifyCartBadgeCount(expectedCount: number): void {
        this.getByTestId(this.selectors.shoppingCartBadge)
            .should('have.text', expectedCount.toString());
    }

    /**
     * Click on shopping cart to navigate to cart page
     */
    goToCart(): void {
        this.getByTestId(this.selectors.shoppingCartLink).click();
    }

    /**
     * Get the number of inventory items displayed
     */
    getInventoryItemCount(): Cypress.Chainable<number> {
        return this.getByTestId(this.selectors.inventoryItem).its('length');
    }

    /**
     * Sort products by the given option
     */
    sortBy(option: 'az' | 'za' | 'lohi' | 'hilo'): this {
        this.getByTestId(this.selectors.sortDropdown).select(option);
        return this;
    }
}

export const inventoryPage = new InventoryPage();

