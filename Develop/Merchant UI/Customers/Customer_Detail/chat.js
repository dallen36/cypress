/// <reference types="cypress" />

describe('Send a text to a customer through the chat', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Send a message", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Search Number
        cy.wait(1000)
        cy.get('table').contains('td',' +1 (801) 867-8671 ').click() // ( +1 (XXX) XXX-XXXX )
        cy.wait(2000)
        cy.get('#chat-input-text').type('Test') // Text Message
        cy.get('#chat-send').click()
    })
})