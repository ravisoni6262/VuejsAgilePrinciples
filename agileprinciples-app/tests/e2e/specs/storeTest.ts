//@ts-check

describe("UI to Vuex store", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const getStore = () => cy.window().its("Store");

  it("Check State", () => {
    getStore()
      .its("state")
      .should("have.keys", ["isLoading", "principlesArray"]);
  });

  it("Initial State Empty", () => {
    getStore()
      .its("state")
      .should("have.property", "isLoading")
      .should("equal", false);

    getStore()
      .its("state")
      .should("have.property", "principlesArray");
  });

  it("changes the state", () => {
    getStore().then(store => {
      store.dispatch("loadPrinciples");
    });
  });

  it("Final State", () => {
    getStore()
      .its("state")
      .should("be.an", "object")
      .should("have.property", "isLoading")
      .should("equal", false);
  });
});
