/// <reference types="cypress" />

describe('Turn On/Off Auto Pay from an Invoice in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Develop Consumer", () => {
        cy.visit("https://my-dev.blytzpay.com/#/login")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+boy@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Turn on/off Auto Pay', () => {
        cy.wait(2000)
        cy.get('div[class="detail-grid"]').contains(' Test name ').click() // .contains(' Invoice Name ')
        cy.wait(1000)
        cy.get('[data-cy=btn-auto-pay]').click()
        cy.get('b').click()
        cy.get('.btn-light-primary').click()
    })
})
