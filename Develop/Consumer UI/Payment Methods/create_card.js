/// <reference types="cypress" />

describe('Creates a Card in Payment Methods in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Develop Consumer", () => {
        cy.visit("https://my-dev.blytzpay.com/#/login")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+boy@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Create a Card', () => {
        cy.wait(2000)
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=payment-methods]').click()
        cy.get('.add-payment-method').click()
        cy.wait(1000)
        cy.get('.card-body > :nth-child(2)').click()
        
        cy.get('[data-cy=input-nickname]').type('Card') // Card Nickname
        cy.get('[data-cy=input-holder-name]').type('Dallen') // Name On Card
        cy.get('[data-cy=input-card-number]').type('4111111111111111') // Card Number
        cy.get('[data-cy=input-expiry]').type('1122') // Expiration Date
        cy.get('[data-cy=input-street]').type('1234 E 4321 S') // Street Address
        cy.get('[data-cy=input-postal]').type('84090') // Zipcode

        cy.get('.btn-light-primary').click()
    })
})
