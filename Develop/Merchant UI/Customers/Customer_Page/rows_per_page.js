/// <reference types="cypress" />

describe('Verify the amount of customers per page', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Verify customers per page", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.wait(2000)
        cy.get('#num_per_page').select('50')// 50, 75, 100
        cy.wait(2000)
        cy.get('tbody').find('tr').should('have.length', '50') // 50, 75, 100
    })
})
