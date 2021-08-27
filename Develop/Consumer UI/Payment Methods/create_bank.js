/// <reference types="cypress" />

describe('Creates a Bank Account in Payment Methods in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Develop Consumer", () => {
        cy.visit("https://my-dev.blytzpay.com/#/login")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+boy@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Create a Bank Account', () => {
        cy.wait(2000)
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=payment-methods]').click()
        cy.get('.add-payment-method').click()
        cy.wait(1000)
        cy.get('.card-body > :nth-child(3)').click()
        
        cy.get('legend').contains('Account Nickname').next().type('Bank') // Account Nickname
        cy.get('legend').contains('Name on Account').next().type('Dall') // Name on Account
        cy.get('legend').contains('Account Number').next().type('12344321') // Account Number
        cy.get('legend').contains('Routing Number').next().type('011401533') // Rounting Number
        cy.get('select').select('Checking') // Account Type - Checking/Savings

        cy.get('.btn-light-primary').click()
    })
})
