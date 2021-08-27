/// <reference types="cypress" />

describe('Change the Language in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Stage Consumer", () => {
        cy.visit("https://my-stage.blytzpay.com/#/login?next=%2F")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+test@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Change the Langauge', () => {
        cy.wait(2000)
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=message-settings]').click()
        cy.wait(1000)
        //cy.get('#language').select('Spanish - español') // Spanish
        cy.get('#language').select('English') //English
        cy.get('[data-cy=btn-update-language]').click()
    })
})
