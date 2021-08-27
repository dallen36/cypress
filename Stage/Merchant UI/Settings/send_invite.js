/// <reference types="cypress" />

describe('Send a CRUD invitation', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Send an Invite", () => {
        cy.wait(2000)
        cy.get('#user-dropdown__BV_toggle_').click()
        cy.get('[data-cy=merchant-settings-option]').click()
        cy.get('[data-cy=settings-nav-user-management]').click()
        cy.wait(2000)
        cy.get('[data-cy=invite-merchant-user-btn]').click() // Invite Button

        cy.get('[data-cy="first name"]').type('Test First Name') // First Name
        cy.get('[data-cy="last name"]').type('Test Last Name') // Last Name
        cy.get('[data-cy=email]').type('dallen.gutierrez+test1@blytzpay.com')/// Change Email - No Existing
        cy.get('.input-group > [data-cy=merchant-invite-role-selector]').select('admin')/// Admin or Staff
        cy.get('[data-cy=send-merchant-user-invite]').click() // Send Invite
    })

})