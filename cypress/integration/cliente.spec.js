/// <reference types="cypress" />
 
context('testar Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('deveria mostrar a lista de clientes', () => {
    // https://on.cypress.io/type
    cy.get('li').should("to.have.length", 3)
      
  })
})