/// <reference types="cypress" />

describe("Change the Logo", () => {
  it("Should update merchant logo", () => {
    cy.visit("https://dev.blytzpay.com/#/login");
    cy.data("email").type("admin@blytzpay.com");
    cy.data("password").type("blytzpay1");
    cy.data("login").click();
    const filepath = "/saketumi-plaza.png";
    cy.data("merchant-settings").click();
    cy.get('input[type="file"]').attachFile(filepath);
    cy.intercept("**/upload_logo").as("logoSet");
    cy.data("upload-file-save").click();
    cy.wait("@logoSet")
      .its("response.body")
      .then((body) => {
        cy.get("#merchant-logo").should("have.attr", "src", body.url);
      });
  });
});
