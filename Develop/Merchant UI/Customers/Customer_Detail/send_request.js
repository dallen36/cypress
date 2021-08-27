/// <reference types="cypress" />


describe('Send a Request through a Customer', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Send a Request", () => {
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Number to search
        cy.wait(2000)
        cy.get(':nth-child(1) > [aria-colindex="4"] > :nth-child(1) > div').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .h-flex > :nth-child(2) > .btn').click()
        cy.get('[data-cy=send-payment-amount]').clear().type('22.22') // Amount
        //Waive Fee
        //cy.get('#payment-modal___BV_modal_body_ > form > .custom-control > .custom-control-label').click()
        cy.get('#payment-modal___BV_modal_footer_ > .btn-blue').click()
    })
})