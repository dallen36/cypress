/// <reference types="cypress" />

describe('Create an Account through a Customer in merchant', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Create an Account", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Number Search
        cy.wait(2000)
        cy.get('table').contains('td',' +1 (801) 867-8671 ').click() // ( +1 (XXX) XXX-XXXX )
        cy.wait(2000)
        cy.get('#account-toolbar > .btn').click()
        cy.get('[data-cy=account-name]').type("Dallen") // Account Name
        cy.get('[data-cy=amount-due]').type('22') // Amount Due
        cy.get('[data-cy=due-date]').type('12/12/2022') // Due Date
        cy.get('#description').type('Some kind of description') // Description
        cy.get('#unique-id').type('1234') // Unique ID
        cy.get('[data-cy=save-account]').click() 

    })
})