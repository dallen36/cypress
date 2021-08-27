/// <reference types="cypress" />

describe("Search a customer's number and verify it", () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Search a number", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Number to search ('xxxxxxxxxx')
        cy.wait(2000)
        cy.get('[aria-colindex="4"] > :nth-child(1) > div').contains('+1 (801) 867-8671').should('have.text', ' +1 (801) 867-8671 ') // (' +1 (XXX) XXX-XXXX ') 
    })
})
