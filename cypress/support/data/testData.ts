/**
 * Test data for customer information
 */
export const customerData = {
    valid: {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        postalCode: '4321',
    },
    invalidEmpty: {
        firstName: '',
        lastName: '',
        postalCode: '',
    },
} as const;

/**
 * Product names available in the store
 */
export const products = {
    backpack: {
        name: 'Sauce Labs Backpack',
        price: 29.99,
    },
    bikeLight: {
        name: 'Sauce Labs Bike Light',
        price: 9.99,
    },
    boltTShirt: {
        name: 'Sauce Labs Bolt T-Shirt',
        price: 15.99,
    },
    fleeceJacket: {
        name: 'Sauce Labs Fleece Jacket',
        price: 49.99,
    },
    onesie: {
        name: 'Sauce Labs Onesie',
        price: 7.99,
    },
    redTShirt: {
        name: 'Test.allTheThings() T-Shirt (Red)',
        price: 15.99,
    },
} as const;

/**
 * Error messages used in the application
 */
export const errorMessages = {
    login: {
        usernameRequired: 'Username is required',
        passwordRequired: 'Password is required',
        invalidCredentials: 'Username and password do not match',
        lockedOut: 'Sorry, this user has been locked out',
    },
    checkout: {
        firstNameRequired: 'First Name is required',
        lastNameRequired: 'Last Name is required',
        postalCodeRequired: 'Postal Code is required',
    },
} as const;

/**
 * Success messages used in the application
 */
export const successMessages = {
    orderComplete: 'Thank you for your order!',
} as const;

