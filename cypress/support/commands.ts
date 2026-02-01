Cypress.Commands.add("getByTestId", (testId) => {
    return cy.get(`[data-test="${testId}"]`)
})

Cypress.Commands.add("loginAs", (userKey) => {
    cy.fixture("users").then((users) => {
        const user = users[userKey]

        cy.visit("https://www.saucedemo.com")
        cy.getByTestId("user-name").type(user.username)
        cy.getByTestId("password").type(user.password)
        cy.getByTestId("login-button").click()
    })
})