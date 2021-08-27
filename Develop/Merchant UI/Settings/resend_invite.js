/// <reference types="cypress" />

describe('Resend an invite to be a CRUD user', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Resend an Invite", () => {
        cy.wait(2000)
        cy.get('#user-dropdown__BV_toggle_').click()
        cy.get('[data-cy=merchant-settings-option]').click()
        cy.get('[data-cy=settings-nav-user-management]').click()
        cy.wait(2000)

    //  cy.contains('td', 'Email')
        cy.contains('td', 'dallen.gutierrez+test1@blytzpay.com').parent().find('[data-cy=resendinvite]').click()
    })
})