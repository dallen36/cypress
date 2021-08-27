/// <reference types="cypress" />

describe('Edits a Bank Account in Payment Methods in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Stage Consumer", () => {
        cy.visit("https://my-stage.blytzpay.com/#/login?next=%2F")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+test@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Edit a Bank Account', () => {
        cy.wait(2000)
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=payment-methods]').click()
        cy.get('div.payment-methods').contains('Bank').parent().parent().parent().find('div[data-cy="btn-edit-method"]').click() // .contains("Card")

        cy.contains('legend', 'Account Nickname').siblings().find('input').clear().type('Bank') // Account Nickname
        cy.contains('legend', 'Name on Account').siblings().clear().type('Dallen') // Name on Account
        cy.contains('legend', 'Account Number').siblings().clear().type('12345678') // Account Number
        cy.contains('legend', 'Routing Number').siblings().clear().type('011401533') // Routing Number
        cy.contains('legend', 'Account Type').siblings().find('select').select('Checking') // Account Type - Checkings/Savings

        cy.get('.btn-light-primary').click()
    })
})
