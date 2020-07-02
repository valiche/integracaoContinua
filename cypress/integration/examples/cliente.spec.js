/// <reference types="cypress" />

context('Testar Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Deveria mostrar a lista de clientes', () => {
      // https://on.cypress.io/type
      cy.get('li').should("to.have.length", 1)
    })
})