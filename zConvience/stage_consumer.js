/// <reference types="cypress" />

describe("Run through all of Stage Consumer", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Login to Stage Consumer", () => {
    cy.visit("https://my-stage.blytzpay.com/#/login?next=%2F");
    cy.get("[data-cy=login-email]").type("dallen.gutierrez+test@blytzpay.com");
    cy.get("[data-cy=login-password]").type("Dallen11!");
    cy.get("[data-cy=login-button]").click();
  });
  //Bills
  it("Add card", () => {
    cy.wait(2000);
    cy.get('div[class="detail-grid"]').contains(" Test name ").click(); // .contains(' Invoice Name ')
    cy.wait(1000);
    cy.get("[data-cy=btn-select-paymentmethod]").click();
    cy.get(".card-body > :nth-child(2)").contains("Add Card").click();

    cy.get("[data-cy=input-nickname]").type("Card #1"); // Card Nickname
    cy.get("[data-cy=input-holder-name]").type("Dall"); // Name on Card
    cy.get("[data-cy=input-card-number]").type("4111111111111111"); // Card Number
    cy.get("[data-cy=input-expiry]").type("1122"); // Expiration Date
    cy.get("[data-cy=input-street]").type("1234 street"); // Street Address
    cy.get("[data-cy=input-postal]").type("84090"); // Zip Code

    cy.get(".btn-light-primary").click();
    cy.get(".info > :nth-child(1)").should("contain.value", "Card #1");
  });
  it("View an Invoice", () => {
    cy.wait(1000);
    cy.get("[data-cy=btn-view-invoice]").click();
    cy.get(".card-footer > .actions > .btn").click();
    cy.get(".totals").should("exist");
  });
  it("Turn on/off Auto Pay", () => {
    cy.wait(1000);
    cy.get("[data-cy=btn-auto-pay]").click();
    cy.get("b").click();
    cy.get(".btn-light-primary").click();
    cy.get("[data-cy=btn-auto-pay] > .action-label").should(
      "include.value",
      "ON"
    );
  });
  it("Paying an Invoice", () => {
    cy.wait(1000);
    cy.get("[data-cy=input-cvv]").type("999");
    cy.get("[data-cy=btn-pay]").click();
  });
  //Language
  it("Change the Langauge", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=message-settings]").click();
    cy.wait(1000);
    //cy.get('#language').select('Spanish - español') // Spanish
    cy.get("#language").select("English"); //English
    cy.get("[data-cy=btn-update-language]").click();
  });
  it("Opt Out/In of Email", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=message-settings]").click();
    cy.wait(1000);
    // .contains('h4', 'Account Name')
    cy.get('div[class="account-message-settings"]')
      .contains("h4", " Test name ")
      .parent()
      .contains("Billing")
      .parent()
      .contains("span", "Email")
      .find("label")
      .click();
    cy.get('div[class="account-message-settings"]')
      .contains("h4", " Test name ")
      .parent()
      .contains("Marketing")
      .parent()
      .contains("span", "Email")
      .find("label")
      .click();
    cy.get('div[class="account-message-settings"]')
      .contains("h4", " Test name ")
      .parent()
      .contains("Customer Service")
      .parent()
      .contains("span", "Email")
      .find("label")
      .click();

    cy.get("[data-cy=btn-update]").click();
  });
  it("Opt Out/In of Text", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=message-settings]").click();
    cy.wait(1000);
    // .contains('h4', 'Account Name')
    cy.get('div[class="account-message-settings"]')
      .contains("h4", " Test name ")
      .parent()
      .contains("Billing")
      .parent()
      .contains("span", "Text")
      .find("label")
      .click();
    cy.get('div[class="account-message-settings"]')
      .contains("h4", " Test name ")
      .parent()
      .contains("Marketing")
      .parent()
      .contains("span", "Text")
      .find("label")
      .click();
    cy.get('div[class="account-message-settings"]')
      .contains("h4", " Test name ")
      .parent()
      .contains("Customer Service")
      .parent()
      .contains("span", "Text")
      .find("label")
      .click();

    cy.get("[data-cy=btn-update]").click();
  });
  //Payment Methods
  it("Create a Bank Account", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=payment-methods]").click();
    cy.get(".add-payment-method").click();
    cy.wait(1000);
    cy.get(".card-body > :nth-child(3)").click();

    cy.get("legend").contains("Account Nickname").next().type("Bank"); // Account Nickname
    cy.get("legend").contains("Name on Account").next().type("Dall"); // Name on Account
    cy.get("legend").contains("Account Number").next().type("12344321"); // Account Number
    cy.get("legend").contains("Routing Number").next().type("011401533"); // Rounting Number
    cy.get("select").select("Checking"); // Account Type - Checking/Savings

    cy.get(".btn-light-primary").click();
  });
  it("Create a Card", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=payment-methods]").click();
    cy.get(".add-payment-method").click();
    cy.wait(1000);
    cy.get(".card-body > :nth-child(2)").click();

    cy.get("[data-cy=input-nickname]").type("Card"); // Card Nickname
    cy.get("[data-cy=input-holder-name]").type("Dallen"); // Name On Card
    cy.get("[data-cy=input-card-number]").type("4111111111111111"); // Card Number
    cy.get("[data-cy=input-expiry]").type("1122"); // Expiration Date
    cy.get("[data-cy=input-street]").type("1234 E 4321 S"); // Street Address
    cy.get("[data-cy=input-postal]").type("84090"); // Zipcode

    cy.get(".btn-light-primary").click();
  });
  it("Edit a Bank Account", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=payment-methods]").click();
    cy.get("div.payment-methods")
      .contains("Bank")
      .parent()
      .parent()
      .parent()
      .find('div[data-cy="btn-edit-method"]')
      .click(); // .contains("Card")

    cy.contains("legend", "Account Nickname")
      .siblings()
      .find("input")
      .clear()
      .type("Bank"); // Account Nickname
    cy.contains("legend", "Name on Account").siblings().clear().type("Dallen"); // Name on Account
    cy.contains("legend", "Account Number").siblings().clear().type("12345678"); // Account Number
    cy.contains("legend", "Routing Number")
      .siblings()
      .clear()
      .type("011401533"); // Routing Number
    cy.contains("legend", "Account Type")
      .siblings()
      .find("select")
      .select("Checking"); // Account Type - Checkings/Savings

    cy.get(".btn-light-primary").click();
  });
  it("Edit Card", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=payment-methods]").click();
    cy.get("div.payment-methods")
      .contains("Net")
      .parent()
      .parent()
      .parent()
      .find('div[data-cy="btn-edit-method"]')
      .click(); // .contains("Card")

    cy.get("[data-cy=input-nickname]").clear().type("Net"); // Card Nick Name
    cy.contains("legend", "Name on Card").siblings().clear().type("Dal"); // Name on Card
    //cy.get('[data-cy=input-card-number]').type('4111111111111111')
    cy.get("[data-cy=input-card-number]").type("6011111111111117"); // Card Number
    cy.get("[data-cy=input-expiry]").type("1122"); // Expiration Date
    cy.contains("legend", "Street Address")
      .siblings()
      .clear()
      .type("1234 E 4321 S"); // Address
    cy.contains("legend", "Postal Code").siblings().clear().type("84090"); // Zip Code

    cy.get(".btn-light-primary").click();
  });
  //Receipts
  it("Verify Receipt", () => {
    cy.wait(2000);
    cy.get("[data-cy=btn-toggle-nav]").click();
    cy.get("[data-cy=receipts]").click();
  });
});
