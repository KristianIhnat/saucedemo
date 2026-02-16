/**
 * Centralized selectors for the application
 * Using data-test attributes for reliable test targeting
 */

export const SELECTORS = {
    login: {
        usernameInput: 'username',
        passwordInput: 'password',
        loginButton: 'login-button',
        errorMessage: 'error',
    },
    inventory: {
        addToCartBackpack: 'add-to-cart-sauce-labs-backpack',
        addToCartBikeLight: 'add-to-cart-sauce-labs-bike-light',
        addToCartBoltTShirt: 'add-to-cart-sauce-labs-bolt-t-shirt',
        addToCartFleeceJacket: 'add-to-cart-sauce-labs-fleece-jacket',
        addToCartOnesie: 'add-to-cart-sauce-labs-onesie',
        removeFromCart: 'remove-sauce-labs-backpack',
        shoppingCartLink: 'shopping-cart-link',
        shoppingCartBadge: 'shopping-cart-badge',
        inventoryItem: 'inventory-item',
        inventoryItemName: 'inventory-item-name',
        inventoryItemPrice: 'inventory-item-price',
        sortDropdown: 'product-sort-container',
    },
    cart: {
        cartItem: 'inventory-item',
        itemQuantity: 'item-quantity',
        itemName: 'inventory-item-name',
        itemPrice: 'inventory-item-price',
        checkoutButton: 'checkout',
        continueShoppingButton: 'continue-shopping',
        removeButton: 'remove-sauce-labs-backpack',
    },
    checkout: {
        firstName: 'firstName',
        lastName: 'lastName',
        postalCode: 'postalCode',
        continueButton: 'continue',
        cancelButton: 'cancel',
        finishButton: 'finish',
        errorMessage: 'error',
        summarySubtotal: 'subtotal-label',
        summaryTax: 'tax-label',
        summaryTotal: 'total-label',
    },
    orderConfirmation: {
        completeHeader: 'complete-header',
        completeText: 'complete-text',
        backHomeButton: 'back-to-products',
    },
    common: {
        burgerMenuButton: 'open-menu',
        logoutLink: 'logout-sidebar-link',
        inventoryLink: 'inventory-sidebar-link',
    },
} as const;

export type SelectorKey = keyof typeof SELECTORS;

