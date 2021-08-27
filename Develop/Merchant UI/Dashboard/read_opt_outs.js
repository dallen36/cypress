/// <reference types="cypress" />

describe('Shows Payments Missed Due to Opt Outs on dashboard', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Show Payments Missed Due to Opt Outs", () => {
        cy.wait(3000)
        cy.get('.content-body > :nth-child(2)').click()
        cy.wait(1000)
        cy.get('.standard-page').should('not.contain', 'No Content Here!') //No Payments Missed Due to Opt Outs
    })
})