//@ts-check
describe("API Testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Fetch Principles", () => {
    cy.request("GET", "http://192.168.0.7:4000/").its("body");
  });

  it("Validate the Header", () => {
    cy.request("GET", "http://192.168.0.7:4000/")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
  });

  it("Validate the Status code", () => {
    cy.request("GET", "http://192.168.0.7:4000/")
      .its("status")
      .should("equal", 200);
  });

  it("Load Principles on start", () => {
    cy.server();
    cy.route("/").as("principles");
    cy.visit("/");
    cy.wait("@principles").then(xhr => {
      cy.log(xhr.response.body.length);
    });
  });
});
