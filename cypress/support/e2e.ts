/**
 * Cypress E2E Support File
 * This file runs before every test file
 */

// Import custom commands
import './commands';

// Global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing tests on uncaught exceptions
    // Log the error for debugging purposes
    console.error('Uncaught exception:', err.message);
    return false;
});

// Configure default timeouts if needed
// Cypress.config('defaultCommandTimeout', 10000);
