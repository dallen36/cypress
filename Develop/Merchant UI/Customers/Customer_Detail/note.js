/// <reference types="cypress" />

describe('Creates a note and searches the note to verify it', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Create a note", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Number Search
        cy.wait(2000)
        cy.get('table').contains('td',' +1 (801) 867-8671 ').click() // ( +1 (XXX) XXX-XXXX )
        cy.wait(3000)
        cy.get('H5').contains('Notes').click()
        cy.get('[data-cy=note-textarea]').type('Test note with numbers 1524131`') // Note
        cy.get('[data-cy=note-submit]').click()
        cy.wait(1000)
        cy.get('#notes-header > .input-group > input[placeholder="Search..."]').type('Test') // Search Note
        cy.wait(1000)
        cy.get('#notes-body').should('include.text', 'Test') // Search Note
    })
}) 