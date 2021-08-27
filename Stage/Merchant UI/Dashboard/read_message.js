/// <reference types="cypress" />

describe('Reads Unread Messages in dashboard', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Read Unread Message", () => {
        cy.wait(3000)
        cy.get('.content-body > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('.standard-page').should('not.contain', 'No Content Here!') //No Unread Messages
        cy.get('.unread-messages-table-row-content > [aria-colindex="2"]').click()
    })
})