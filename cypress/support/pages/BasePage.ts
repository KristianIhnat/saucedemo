/**
 * Base Page class that provides common functionality for all pages
 */
export abstract class BasePage {
    /**
     * Get element by data-test attribute
     */
    protected getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-test="${testId}"]`);
    }

    /**
     * Navigate to a specific path
     */
    protected navigateTo(path: string): void {
        cy.visit(path);
    }

    /**
     * Verify the current URL contains the expected path
     */
    protected verifyUrlContains(path: string): void {
        cy.url().should('include', path);
    }

    /**
     * Wait for page to load completely
     */
    protected waitForPageLoad(): void {
        cy.document().should('have.property', 'readyState', 'complete');
    }

    /**
     * Abstract method to verify page is loaded
     */
    abstract verifyPageLoaded(): void;
}

