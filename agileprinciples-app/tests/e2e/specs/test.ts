// https://docs.cypress.io/api/introduction/api.html
//@ts-check
describe("App Test", () => {
  beforeEach(() => {
    // Because we're only testing the homepage
    // in this test file, we can run this command
    // before each individual test instead of
    // repeating it in every test.
    cy.visit("/");
  });

  it("Visits the app root url", () => {
    cy.get("#app").should("be.visible");
    cy.get(".home").should("be.visible");
    cy.get(".navigator").should("be.visible");
    cy.get(".agile-principles").should("be.visible");
  });

  it("Navigator Test", () => {
    cy.get(".navigator").should("be.visible");
    cy.get(".home-link").should("have.class", "active");
    cy.get(".about-link").should("be.visible");
    cy.get(".about-link").click();
    cy.url().should("contain", "/about");
    cy.go("back");
    cy.url().should("contain", "/");
  });

  it("AgilePrinciple Component Test", () => {
    cy.get(".agile-principles").should("be.visible");
    cy.get("h1").contains("Manifesto for Agile Software Development");
    cy.get(".card-title").contains("Principles behind the Agile Manifesto");
    cy.get(".card-text").should("be.visible");
  });

  it("Slider Component Test", () => {
    cy.get(".carousel-3d-container").should("be.visible");
    cy.get("slide").should("have.length", 0);
  });
});
