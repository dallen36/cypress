/// <reference types="cypress" />

describe('Shows todays sent messages on dashboard', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Show todays sent messages", () => {
        cy.wait(3000)
        cy.get('.content-body > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('.standard-page').should('not.contain', 'No Content Here!') //No Payments Missed Due to Opt Outs
    })
})