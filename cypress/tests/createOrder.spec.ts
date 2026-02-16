import {
    inventoryPage,
    cartPage,
    checkoutPage,
    orderConfirmationPage
} from '../support/pages';
import { customerData, products, errorMessages, successMessages } from '../support/data';

describe('Shopping Cart & Checkout', () => {
    beforeEach(() => {
        cy.loginAs('standardUser');
    });

    describe('Add to Cart', () => {
        it('should add a product to the shopping cart', () => {
            inventoryPage.addProductToCart('backpack');
            inventoryPage.verifyCartBadgeCount(1);
        });

        it('should add multiple products to the shopping cart', () => {
            inventoryPage
                .addProductToCart('backpack')
                .addProductToCart('bikeLight');
            inventoryPage.verifyCartBadgeCount(2);
        });
    });

    describe('Complete Order', () => {
        it('should complete order with single product', () => {
            // Add product to cart
            inventoryPage.addProductToCart('backpack');
            inventoryPage.goToCart();

            // Verify cart contents
            cartPage.verifyPageLoaded();
            cartPage
                .verifyItemQuantity(1)
                .verifyItemName(products.backpack.name);

            // Proceed to checkout
            cartPage.proceedToCheckout();

            // Fill checkout information and complete order
            checkoutPage.fillCustomerInfo(customerData.valid);
            checkoutPage.clickContinue();
            checkoutPage.clickFinish();

            // Verify order completion
            orderConfirmationPage.verifyOrderComplete(successMessages.orderComplete);
        });
    });

    describe('Checkout Validation', () => {
        beforeEach(() => {
            inventoryPage.addProductToCart('backpack');
            inventoryPage.goToCart();
            cartPage.proceedToCheckout();
        });

        it('should show error when first name is missing', () => {
            checkoutPage.clickContinue();
            checkoutPage.verifyErrorMessage(errorMessages.checkout.firstNameRequired);
        });

        it('should show error when last name is missing', () => {
            checkoutPage
                .enterFirstName('Sherlock')
                .clickContinue();
            checkoutPage.verifyErrorMessage(errorMessages.checkout.lastNameRequired);
        });

        it('should show error when postal code is missing', () => {
            checkoutPage
                .enterFirstName('Sherlock')
                .enterLastName('Holmes')
                .clickContinue();
            checkoutPage.verifyErrorMessage(errorMessages.checkout.postalCodeRequired);
        });
    });
});
