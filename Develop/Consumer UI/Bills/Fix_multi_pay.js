/// <reference types="cypress" />

describe('Pay an Invoice with 2 Cards using Multi Pay in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Develop Consumer", () => {
        cy.visit("https://my-dev.blytzpay.com/#/login")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+boy@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Paying an Invoice with Multi-pay', () => {
        cy.wait(2000)
        cy.get('div[class="detail-grid"]').contains(' Test name ').click() // .contains(' Invoice Name ')
        cy.wait(1000)
        cy.get('[data-cy=btn-multipay]').click()
        cy.wait(1000)

        cy.contains('Dall').parent().parent().parent().within('input')

        //cy.get('[data-cy=btn-pay-now]').click()
    })
})
