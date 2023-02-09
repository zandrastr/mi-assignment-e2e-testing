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