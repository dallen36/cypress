/// <reference types="cypress" />

describe('Edits a customers account details', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Edit customer's account details", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Numbers to search
        cy.wait(2000)
        cy.get('table').contains('td',' +1 (801) 867-8671 ').click() // ( +1 (XXX) XXX-XXXX )
        cy.wait(3000)

        cy.get('[data-cy=edit-account-button] > g > path').click()
        cy.get('[data-cy=account-name]').clear().type('Test name') // Account Name
        cy.get('[data-cy=amount-due]').clear().type('33') // Amount Due
        cy.get('[data-cy=due-date]').clear().type('12/13/2002') // Due Date
        cy.get('#account-status').select('Active') // Active, Do Not Contact, Inactive
        //cy.get('#account-detail-items > .custom-control > .custom-control-label').click() // Waive Fee
        cy.get('#description').clear().type('This is a test description') // Description
        cy.get('#unique-id').clear().type('1111') // Unique ID

        cy.get('[data-cy=save-account]').click()
    })
}) 