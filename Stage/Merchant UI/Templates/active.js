/// <reference types="cypress" />

describe('Disables/Activates a template', () => {
    
    it("Login to Stage", () => {
        cy.visit("https://stage.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+stage@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Disables/Activate a Template", () => {
        cy.wait(2000)
        cy.get('[data-cy=templates]').click()
        
        cy.wait(2000)
        //.contains("td", "Template Name")
        cy.contains('td', 'Test').parent().find('div[class="custom-checkbox custom-control custom-checkbox"]').click()
    })
}) 