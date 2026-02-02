export function getByTestId(testId: string) {
    return cy.get(`[data-test="${testId}"]`);
}