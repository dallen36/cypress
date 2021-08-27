/// <reference types="cypress" />

describe('Deactivate a CRUD user', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Deactivate a CRUD user", () => {
        cy.wait(2000)
        cy.get('#user-dropdown__BV_toggle_').click()
        cy.get('[data-cy=merchant-settings-option]').click()
        cy.get('[data-cy=settings-nav-user-management]').click()

    //  cy.contains('td', 'Email')
        cy.contains('td', 'dallen.gutierrez+work@blytzpay.com').parent().find('span[data-cy="disableuser"]').click()
        cy.get('[data-cy=disable-user-btn]').click() // Disable Button
    })
})
