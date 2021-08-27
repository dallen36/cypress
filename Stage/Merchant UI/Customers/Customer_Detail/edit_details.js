/// <reference types="cypress" />

describe('Edits a customers details', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Edit customer details", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=search]').type('8018678671') // Number to search
        cy.wait(2000)
        cy.get('table').contains('td',' +1 (801) 867-8671 ').click() // ( +1 (XXX) XXX-XXXX )
        cy.wait(2000)
        cy.get('#edit-customer-button > g > path').click()

        cy.get('[data-cy=first-name]').clear().type('Test Dallen') // First Name
        cy.get('[data-cy=last-name]').clear().type('Test Gutierrez') // Last Name
        cy.get('.vti__input').clear().type('8018678671') // Phone Number
        cy.get('[data-cy=email]').clear().type('dallen.gutierrez+test@blytzpay.com') // Email
        cy.get('[data-cy=dob]').clear().type('12/13/2002') // Birthday
        cy.get('[data-cy=address]').clear().type('356 E La Vera Ln') // Address
        cy.get('[data-cy=ssn]').clear().type('7878') // Social Security Number
        cy.get('[data-cy=city]').clear().type('sandy') // City
        cy.get('[data-cy=state]').select('Utah') // State
        cy.get('[data-cy=zip]').clear().type('84070') // Zip Code

        cy.get('[data-cy=save]').click()
        
    })
})