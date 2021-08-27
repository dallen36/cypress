/// <reference types="cypress" />

describe('Changes the month in dashboard', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Change Month", () => {
        cy.wait(3000)
        cy.get('div#new-accounts-container').contains('select', 'Current Month').select('3 Months')//3,6,9,12
        cy.wait(3000)
        cy.get('div#collection-rate-container').contains('select', 'Current Month').select('3 Months')//3,6,9,12
        
    })
})