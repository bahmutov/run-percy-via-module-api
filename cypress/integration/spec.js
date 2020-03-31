/// <reference types="cypress" />
it('works', () => {
  cy.visit('/commands/waiting')
  cy.contains('h1', 'Waiting')
  cy.percySnapshot('Waiting page')
})
