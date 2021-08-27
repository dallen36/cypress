/// <reference types="cypress" />

describe('Edits a Card in Payment Methods in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Develop Consumer", () => {
        cy.visit("https://my-dev.blytzpay.com/#/login")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+boy@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Edit Card', () => {
        cy.wait(2000)
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=payment-methods]').click()
        cy.get('div.payment-methods').contains('Net').parent().parent().parent().find('div[data-cy="btn-edit-method"]').click() // .contains("Card")

        cy.get('[data-cy=input-nickname]').clear().type('Net') // Card Nick Name
        cy.contains('legend', 'Name on Card').siblings().clear().type('Dal') // Name on Card
      //cy.get('[data-cy=input-card-number]').type('4111111111111111')
        cy.get('[data-cy=input-card-number]').type('6011111111111117') // Card Number
        cy.get('[data-cy=input-expiry]').type('1122') // Expiration Date
        cy.contains('legend', 'Street Address').siblings().clear().type('1234 E 4321 S') // Address
        cy.contains('legend', 'Postal Code').siblings().clear().type('84090') // Zip Code

        cy.get('.btn-light-primary').click()
    })
})
