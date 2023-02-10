beforeEach(() => {
    cy.visit("/");
});

describe("checks url and start page elements", () => {

    it("should open correct url", () => {
    });

    it("should contain input field", () => {
        cy.get("input").should("exist");
    });

    it("should contain button", () => {
        cy.get("button").contains("Sök").should("exist");
    });

});

describe("checks input and button functionality", () => {

    it("should add text to input field", () => {
        cy.get("input").type("Test input").should("have.value", "Test input");
    });

    it("should be able to press button", () => {
        cy.get("input").type("Test input").should("have.value", "Test input");
        cy.get("button").contains("Sök").click();
        cy.get("#movie-container").should("exist");
    });

    it("should show error message", () => {
        cy.get("input").type(" ").should("have.value", " ");
        cy.get("button").contains("Sök").click();
        cy.get("#movie-container").should("exist");
        cy.get("#movie-container p").contains("Inga sökresultat att visa").should("exist");
    });

});

describe("checks search function with api data and display results ", () => {

    it("should search and find api data", () => {
        cy.get("input").type("Avatar").should("have.value", "Avatar");
        cy.get("button").contains("Sök").click();
        cy.get("#movie-container").contains("Avatar").should("exist");
        cy.get("h3").contains("Avatar").should("exist");
        cy.get("img").should("exist");
    });

});

describe("checks search function with mock data and display results ", () => {

    it("should search and find mock data", () => {
        cy.intercept("GET", "http://omdbapi.com/*", {fixture: "movieResponse"}).as("movieCall"); //to use mock data from file movieResponse.json
        cy.get("input").type("Avatar").should("have.value", "Avatar");
        cy.get("button").contains("Sök").click();
        cy.wait("@movieCall").its("request.url").should("contain", "Avatar");
        cy.get("#movie-container").contains("Avatar").should("exist");
        cy.get("h3").contains("Avatar").should("exist");
        cy.get("img").should("exist");
    });

});