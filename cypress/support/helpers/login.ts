import { UsersFixture } from "../types/users";
import { getByTestId } from "./getByTestId";

export function loginAs(userKey: keyof UsersFixture) {
    cy.fixture("users").then((users: UsersFixture) => {
        const user = users[userKey];

        cy.visit("https://www.saucedemo.com");
        getByTestId("username").type(user.username);
        getByTestId("password").type(user.password);
        getByTestId("login-button").click();

        cy.url().should("include", "/inventory.html");
    });
}