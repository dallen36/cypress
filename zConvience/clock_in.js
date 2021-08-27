 /// <reference types="cypress" />

describe('Clock in/out', () => {
    it("Login Consumer", () => {
        cy.visit("https://clock.payrollservers.us/#/clock/web/login")
        cy.get('[name="username"]').type('014057')
        cy.get('[name="password"]').type('Dallen11!')
        cy.get('[id="Login"]').click()
    })

    
})