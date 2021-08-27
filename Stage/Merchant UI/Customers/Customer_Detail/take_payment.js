/// <reference types="cypress" />

describe('Take a Payment through a Customer in merchant', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Take a Payment", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Number to search
        cy.wait(2000)
        cy.get('table').contains('td',' +1 (801) 867-8671 ').click() // ( +1 (XXX) XXX-XXXX )
        cy.wait(3000)

        cy.get('#account-select').select('Unnamed Account') // Select an account
        cy.get(':nth-child(1) > .h-flex > :nth-child(1) > .btn').click()

        cy.get('[data-cy=name-on-card]').type('Dallen') // Name on Card
        cy.get('[data-cy=card-number]').type('4111111111111111') // Card Number
        cy.get('[data-cy=expiration]').type('1122') // Expiration '1122' = 11/22
        cy.get('[data-cy=cvv]').type('999') // CVV
        cy.get('[data-cy=take-payment-address]').type('1234') // Address
        cy.get('[data-cy=postal-code]').type('84090') // Zip Code
        cy.get('[data-cy=take-payment-amount]').clear().type('22') // Amount

      //cy.get('.v-flex > .h-flex > .custom-control > .custom-control-label').click() // Waive Fee

        cy.wait(1000)
        cy.get('#take-payment-modal___BV_modal_footer_ > .btn-blue').click() // Submit
    })
})
