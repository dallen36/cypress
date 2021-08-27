/// <reference types="cypress" />

describe('Filter customers with past due, locations and unread messages', () => {
    
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Filter customers past due", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('.fa-2x').click()
        cy.get('#overdue-min').type('0') // Min ()
        cy.get('#overdue-max').type('10') // Max ()
        cy.get('#save-filter-button').click()
    })
    it("Filter locations", () => {
        cy.wait(2000)
        cy.get('.multiselect__select').click()
        cy.contains('li', "Let's Kill Hitler LLC ").click() // .contains('li', 'Location ')
        cy.get('#save-filter-button').click()
    })
    it("Filter unread messages", () => {
        cy.wait(2000)
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.get('#save-filter-button').click()
    })
    /*it("Clear Filter", () => {
        cy.wait(10000)
        cy.get('#clear-filter-button').click()
    })
    */
})
