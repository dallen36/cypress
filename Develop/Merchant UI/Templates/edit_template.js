/// <reference types="cypress" />

describe('Edit a Template in merchant', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Edit a Template", () => {
        cy.wait(2000)
        cy.get('[data-cy=templates]').click()
        cy.get('#num_per_page').select('100')
        cy.get('.message-template-container').contains('Test Template').click() ///  .contains("any Template Name")

        cy.get('.input-group > [data-cy=delta-days-selection]').select('Before due date') // Message Delivery (On/Before/After due date)
        cy.get('.days-container').clear().type('79') // Days Before/After (?) Change to new number
        cy.get('[data-cy=subject]').clear().type('Edited Test Template') // Template Name
        cy.get('[data-cy=textfield]').clear()
        cy.get('[data-cy=first-name-snippet] > div').click() // {{First Name}} button
        cy.get('[data-cy=last-name-snippet] > div').click() // {{Last Name}} button
        cy.get('[data-cy=due-date-snippet] > div').click() // {{Due Date}} button
        cy.get('[data-cy=textfield]').clear().type(' with some edited text') // Message

        cy.get(':nth-child(3) > .btn').click() // Save
        cy.get('.cancel').click() // Cancel
    })

})