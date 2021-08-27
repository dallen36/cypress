/// <reference types="cypress" />

describe('Checks Receipts', () => {
    it("Login", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Send Request", () => {
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671')
        cy.get('tbody > tr > [aria-colindex="4"]').click()
        cy.get(':nth-child(1) > .h-flex > :nth-child(2) > .btn').click()
        cy.get('[data-cy=send-payment-amount]').type('22.22')
        //Waive Fee
        //cy.get('#payment-modal___BV_modal_body_ > form > .custom-control > .custom-control-label').click()
        cy.get('#payment-modal___BV_modal_footer_ > .btn-blue').click()
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it("Login Consumer", () => {
        cy.visit("https://my-stage.blytzpay.com/#/login?next=%2F")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+test@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Paying an Invoice', () => {
        cy.get(':nth-child(1) > .card-body > [data-cy=btn-account-detail]').click()
        cy.get('[data-cy=btn-pay]').click()
    })

    it('Checking Receipts', () => {
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=receipts]').click()
        
        cy.get('.body-content').should('contain', '22.22')
    })
})
//Still needs work