/// <reference types="cypress" />

describe('Change the Logo in merchant', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Change Logo", () => {
        cy.wait(2000)
        cy.get('#user-dropdown__BV_toggle_').click()
        cy.get('[data-cy=merchant-settings-option]').click()
        cy.get('[data-cy=logo]').clear().type('https://static.rfstat.com/renderforest/images/v2/logo-homepage/alphabet_4.png')
        //cy.get('[data-cy=logo]').clear().type('https://www.carlogos.org/car-logos/tesla-logo.png')//Tesla
        //cy.get('[data-cy=logo]').clear().type('http://logok.org/wp-content/uploads/2014/05/LV-logo.png')//LV

        cy.get('.btn-blue').click() // Save Button
    })
})