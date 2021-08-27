/// <reference types="cypress" />

describe('Create a Customer in merchant', () => {
    // Phone Number must be changed
    // Merchant Account ID - Not a fixed select
    it("Login to Develop", () => {
        cy.visit("https://develop.blytzpay.com/#/login")
        cy.get('[data-cy=email]').type("dallen.gutierrez+dev@blytzpay.com")
        cy.get('[data-cy=password]').type("Dallen11!")
        cy.get('[data-cy=login]').click()
    })

    it("Create a Customer", () => {
        cy.wait(2000)
        cy.get('[data-cy=customers]').click()
        cy.get('[data-cy=create]').click()

        cy.get('[data-cy="first name"]').type('Rich') // First Name
        cy.get('[data-cy="last name"]').type('Dallen') // Last Name
        cy.get('[data-cy=email]').type('dallen.gutierrez+test@blytzpay.com') // Email
        cy.get('.vti__input').type('8018678671') // Phone Number - Phone Number must be changed
        cy.get('[data-cy=address]').type('1234 E 4321 S') // Address
        cy.get('[data-cy=city]').type('sandy') // City
        cy.get('[data-cy="state/province"]').select("Utah") // State
        cy.get('[data-cy="postal code"]').type('84070') // Zip Code
        cy.get('[data-cy="merchant account id"]').select('SLC Office') // Merchant Account ID - Not a fixed select

        cy.get('.form-actions').click()
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=view-customer-list]').click()
    })
})
