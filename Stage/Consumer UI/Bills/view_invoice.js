/// <reference types="cypress" />

describe('View an Invoices Information in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Stage Consumer", () => {
        cy.visit("https://my-stage.blytzpay.com/#/login?next=%2F")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+test@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('View an Invoice', () => {
        cy.wait(2000)
        cy.get('div[class="detail-grid"]').contains(' Test name ').click() // .contains(' Invoice Name ')
        cy.wait(1000)
        cy.get('[data-cy=btn-view-invoice]').click()
    })
})
