/// <reference types="cypress" />

describe('Add a Card through a Invoice in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Develop Consumer", () => {
        cy.visit("https://my-dev.blytzpay.com/#/login")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+boy@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Add card', () => { 
        cy.wait(2000)
        cy.get('div[class="detail-grid"]').contains(' Test name ').click() // .contains(' Invoice Name ')
        cy.wait(1000)
        cy.get('[data-cy=btn-select-paymentmethod]').click()
        cy.get('[data-cy=btn-add-method]').click()

        cy.get('[data-cy=input-nickname]').type('Card #1') // Card Nickname
        cy.get('[data-cy=input-holder-name]').type('Dall') // Name on Card
        cy.get('[data-cy=input-card-number]').type('4111111111111111') // Card Number
        cy.get('[data-cy=input-expiry]').type('1122') // Expiration Date
        cy.get('[data-cy=input-street]').type('1234 street') // Street Address
        cy.get('[data-cy=input-postal]').type('84090') // Zip Code

        cy.get('.btn-light-primary').click()
    })
})
