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
