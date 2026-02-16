# SauceDemo Cypress E2E Tests

A comprehensive end-to-end testing suite for the [SauceDemo](https://www.saucedemo.com) application using Cypress with TypeScript.

## 🏗️ Architecture

This project follows **Clean Architecture** principles and **Page Object Model (POM)** design pattern for maintainable and scalable test automation.

```
cypress/
├── fixtures/           # Test data files (JSON)
│   └── users.json      # User credentials for different user types
├── support/
│   ├── commands.ts     # Custom Cypress commands
│   ├── e2e.ts          # E2E support configuration
│   ├── data/           # Centralized test data
│   │   ├── index.ts    # Barrel export
│   │   └── testData.ts # Products, messages, customer data
│   ├── pages/          # Page Object Model classes
│   │   ├── BasePage.ts           # Abstract base class
│   │   ├── LoginPage.ts          # Login page interactions
│   │   ├── InventoryPage.ts      # Products page interactions
│   │   ├── CartPage.ts           # Shopping cart interactions
│   │   ├── CheckoutPage.ts       # Checkout flow interactions
│   │   ├── OrderConfirmationPage.ts # Order confirmation
│   │   └── index.ts              # Barrel export
│   ├── selectors/      # Centralized element selectors
│   │   └── index.ts    # All data-test selectors
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts    # User, CustomerInfo interfaces
│   └── utils/          # Utility functions
│       ├── auth.ts     # Authentication helpers
│       └── index.ts    # Barrel export
└── tests/              # Test specification files
    ├── login.spec.ts       # Login functionality tests
    └── createOrder.spec.ts # Shopping cart & checkout tests
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
npm install
```

### Running Tests

```bash
# Open Cypress Test Runner (interactive mode)
npm run cy:open

# Run tests in headless mode
npm run cy:run

# Run tests with headed browser
npm run cy:run:headed

# Run tests in Chrome
npm run cy:run:chrome

# Run tests in Firefox
npm run cy:run:firefox

# TypeScript type checking
npm run typecheck
```

## 📋 Design Patterns & Best Practices

### Page Object Model (POM)

Each page in the application has a corresponding Page Object class that encapsulates:
- Element selectors
- Page-specific actions
- Page-specific assertions

```typescript
// Example usage
import { loginPage, inventoryPage } from '../support/pages';

loginPage.visit();
loginPage.loginWith('standard_user', 'secret_sauce');
inventoryPage.addProductToCart('backpack');
```

### Custom Cypress Commands

Reusable commands are registered globally:

```typescript
// Login as a specific user type
cy.loginAs('standardUser');

// Get element by data-test attribute
cy.getByTestId('login-button');
```

### Centralized Selectors

All selectors are defined in one place for easy maintenance:

```typescript
import { SELECTORS } from '../support/selectors';

// Usage
this.getByTestId(SELECTORS.login.usernameInput);
```

### Centralized Test Data

Test data is organized and reusable:

```typescript
import { customerData, errorMessages, products } from '../support/data';

// Usage
checkoutPage.fillCustomerInfo(customerData.valid);
loginPage.verifyErrorMessage(errorMessages.login.usernameRequired);
```

## 🧪 Test Coverage

### Login Tests (`login.spec.ts`)
- ✅ Successful login with valid credentials
- ✅ Login using custom command
- ✅ Error validation for missing username
- ✅ Error validation for missing password
- ✅ Error validation for invalid credentials
- ✅ Error validation for locked out user

### Shopping Cart & Checkout Tests (`createOrder.spec.ts`)
- ✅ Add single product to cart
- ✅ Add multiple products to cart
- ✅ Complete order with single product
- ✅ Checkout validation for missing first name
- ✅ Checkout validation for missing last name
- ✅ Checkout validation for missing postal code

## 📁 Available User Types

| User Type | Description |
|-----------|-------------|
| `standardUser` | Standard user with full access |
| `lockedUser` | Locked out user |
| `problemUser` | User experiencing UI issues |
| `performanceGlitchUser` | User with slow performance |
| `errorUser` | User that triggers errors |
| `visualUser` | User for visual testing |

## 🔧 Configuration

### Cypress Configuration (`cypress.config.ts`)
- Base URL: `https://www.saucedemo.com`
- Viewport: 1280x720
- Retries: 2 (run mode), 0 (open mode)
- Default command timeout: 10s
- Page load timeout: 30s

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured for clean imports
- ES2020 target

## 📝 License

ISC

