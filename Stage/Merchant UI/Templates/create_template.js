/// <reference types="cypress" />

describe('Create a Template in merchant', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Create a Template", () => {
        cy.wait(2000)
        cy.get('[data-cy=templates]').click()
        cy.get('[data-cy=create-template]').click() // Create template button

        cy.get('.input-group > [data-cy=delta-days-selection]').select("After due date") // Message Delivery (On/Before/After due date)
        cy.get('.days-container').type('78') // Days Before/After (?) Change to new number
        cy.get('[data-cy=subject]').type('Test Template') // Template Name
        cy.get('[data-cy=first-name-snippet] > div').click() // {{First Name}} button
        cy.get('[data-cy=last-name-snippet] > div').click() // {{Last Name}} button
        cy.get('[data-cy=due-date-snippet] > div').click() // {{Due Date}} button
        cy.get('[data-cy=textfield]').type('Testtesteseteset') // Message

        cy.get(':nth-child(3) > .btn').click() // Save
        cy.get('.cancel').click() // Cancel
    })
}) 