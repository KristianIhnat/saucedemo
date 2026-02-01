/// <reference types="cypress" />
Cypress.Commands.add("getByTestId", (testId: string) => {
    return cy.get(`[data-test="${testId}"]`);
});

Cypress.Commands.add("loginAs", (userKey: string) => {
    cy.fixture("users").then((users) => {
        const user = users[userKey];
        cy.visit("https://www.saucedemo.com");
        cy.getByTestId("username").type(user.username);
        cy.getByTestId("password").type(user.password);
        cy.getByTestId("login-button").click();
        cy.url().should("include", "/inventory.html");
    });
});