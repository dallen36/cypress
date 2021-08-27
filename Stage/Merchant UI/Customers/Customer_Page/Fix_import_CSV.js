/// <reference types="cypress" />

describe('Import a CSV and add customers', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Import CSV", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.wait(2000)
        cy.get('.custom-file-label').dblclick()

    })
})
// Still needs work