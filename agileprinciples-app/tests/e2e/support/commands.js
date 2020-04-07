// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('getStore', function() {
//   cy.visit('/') // Load the app in order `cy.window` to work
//   cy.window().then(window => { // .then() to make cypress wait until window is available
//     cy.wrap(window.store).as('store') // alias the store (can be accessed like this.store)
//     cy.request({
//       method: 'GET',
//       url: 'https://my-app/api/auth/login'
//     }).then(res => {
//       // You can access store here
//       console.log(this.store)
//     })
//   })
// })
