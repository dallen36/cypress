/// <reference types="cypress" />

describe('Opt Out/In to all Text Messages in consumer', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("Login to Stage Consumer", () => {
        cy.visit("https://my-stage.blytzpay.com/#/login?next=%2F")
        cy.get('[data-cy=login-email]').type("dallen.gutierrez+test@blytzpay.com")
        cy.get('[data-cy=login-password]').type("Dallen11!")
        cy.get('[data-cy=login-button]').click()
    })

    it('Opt Out/In of Text', () => {
        cy.wait(2000)
        cy.get('[data-cy=btn-toggle-nav]').click()
        cy.get('[data-cy=message-settings]').click()
        cy.wait(1000)
                                                    // .contains('h4', 'Account Name')
        cy.get('div[class="account-message-settings"]').contains('h4',' Test name ').parent().contains('Billing').parent().contains('span', 'Text').find('label').click()
        cy.get('div[class="account-message-settings"]').contains('h4',' Test name ').parent().contains('Marketing').parent().contains('span', 'Text').find('label').click()
        cy.get('div[class="account-message-settings"]').contains('h4',' Test name ').parent().contains('Customer Service').parent().contains('span', 'Text').find('label').click()

        cy.get('[data-cy=btn-update]').click()
    })
})
