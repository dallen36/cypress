/// <reference types="cypress" />
let change_number = 8015551115;
let create_account_id = 30002;
let edit_d_id = 40002;
let template_days = 101;
let edit_templates_days = 101;

describe("Run through all of Develop Merchant", () => {
  it("Login to Stage", () => {
    cy.visit("https://develop.blytzpay.com/#/login");
    cy.get("[data-cy=email]").type("dallen.gutierrez+dev@blytzpay.com");
    cy.get("[data-cy=password]").type("Dallen11!");
    cy.get("[data-cy=login]").click();
  });
  it("Change number", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671");
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click();
    cy.wait(2000);
    cy.get("#edit-customer-button > g > path").click();
    cy.get(".vti__input").clear().type(change_number); //REQUIRED
    cy.get("[data-cy=save]").click();
    cy.wait(1000);
    cy.get(".vti__input").should("contain.value", change_number); //REQUIRED
    cy.get(".m-3").click();
  });
  it("Create a Customer", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=create]").click();

    cy.get('[data-cy="first-name"]').type("Rich"); // First Name
    cy.get('[data-cy="last-name"]').type("Dallen"); // Last Name
    cy.get("[data-cy=email]").type("dallen.gutierrez+test@blytzpay.com"); // Email
    cy.get(".vti__input").type("8018678671"); // Phone Number - Phone Number must be changed
    cy.get("[data-cy=address]").type("1234 E 4321 S"); // Address
    cy.get("[data-cy=city]").type("sandy"); // City
    cy.get('[data-cy="state"]').select("Utah"); // State
    cy.get('[data-cy="postal-code"]').type("84070"); // Zip Code
    //cy.get('[data-cy="merchant account id"]').select('SLC Office') // Merchant Account ID - Not a fixed select

    cy.get(".form-actions").click();
    cy.get("[data-cy=customer-save]").click();
    cy.get("[data-cy=view-customer-list]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Numbers to search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").should("exist");
  });
  it("Send a message", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Search Number
    cy.wait(1000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);
    cy.get("#chat-input-text").type("TeSt"); // Text Message
    cy.get("#chat-send").click();

    cy.get("#chat-messages").should("contain", "TeSt");
  });
  /*it("Verify customers per page", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear();
    cy.wait(2000);
    cy.get("#num_per_page").select("100"); // 50, 75, 100
    cy.wait(2000);
    cy.get("tbody").find("tr").should("have.length", "100"); // 50, 75, 100
  });*/
  it("Search a number", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Number to search ('xxxxxxxxxx')
    cy.wait(2000);
    cy.get('[aria-colindex="4"] > :nth-child(1) > div')
      .contains("+1 (801) 867-8671")
      .should("have.text", " +1 (801) 867-8671 "); // (' +1 (XXX) XXX-XXXX ')
  });
  it("Filter customers past due", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear();
    cy.get(".fa-2x").click();
    cy.get("#overdue-min").type("0"); // Min ()
    cy.get("#overdue-max").type("10"); // Max ()
    cy.get("#save-filter-button").click();

    cy.get("thead").contains("th", "Days Overdue").should("exist");
    cy.get("#clear-filter-button").click();
  });
  /*it("Filter locations", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear();
    cy.get(".fa-2x").click();
    cy.get(".multiselect__select").click();
    cy.contains("li", "Let's Kill Hitler LLC ").click(); // .contains('li', 'Location ')
    cy.get("#save-filter-button").click();

    cy.get('tbody > :nth-child(1) > [aria-colindex="7"]').should(
      "have.text",
      " Let's Kill Hitler LLC "
    );
    cy.get("#clear-filter-button").click();
  });*/
  it("Filter unread messages", () => {
    cy.wait(2000);
    cy.get(".custom-control-label").click();
    cy.get("#save-filter-button").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > [aria-colindex="1"] > :nth-child(1) > div').should(
      "contain.text",
      "1"
    );
    cy.get("#clear-filter-button").click();
    cy.get(".fa-2x").click();
  });
  it("Create an Account", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Number Search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);
    cy.get("#account-toolbar > .btn").click();
    cy.get("[data-cy=account-name]").type("Dallen-Account"); // Account Name
    cy.get("[data-cy=amount-due]").type("22"); // Amount Due
    cy.get("[data-cy=due-date]").type("12/12/2022"); // Due Date
    cy.get("#description").type("Some kind of description"); // Description
    cy.get("#unique-id").type(create_account_id); //REQUIRED
    cy.get("[data-cy=save-account]").click();
    cy.wait(2000);

    cy.get("#account-select").should("contain", "Dallen-Account");
  });
  it("Edit customer's account details", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Numbers to search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);

    cy.get("[data-cy=edit-account-button] > g > path").click();
    cy.get("[data-cy=account-name]").clear().type("Dallen-Account"); // Account Name
    cy.get("[data-cy=amount-due]").clear().type("33"); // Amount Due
    cy.get("[data-cy=due-date]").clear().type("12/13/2002"); // Due Date
    cy.get("#account-status").select("Active"); // Active, Do Not Contact, Inactive
    //cy.get('#account-detail-items > .custom-control > .custom-control-label').click() // Waive Fee
    cy.get("#description").clear().type("This is a test description"); // Description
    cy.get("#unique-id").clear().type(edit_d_id); //REQUIRED

    cy.get("[data-cy=save-account]").click();

    cy.get("#unique-id").should("have.value", edit_d_id); //REQUIRED
  });
  it("Create a note", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Number Search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);
    cy.get("H5").contains("Notes").click();
    cy.get("[data-cy=note-textarea]").type("Test note with numbers 1524131`"); // Note
    cy.get("[data-cy=note-submit]").click();
    cy.wait(1000);
    cy.get(
      '#notes-header > .input-group > input[placeholder="Search..."]'
    ).type("Test"); // Search Note
    cy.wait(1000);
    cy.get("#notes-body").should("include.text", "Test"); // Search Note
  });
  it("Edit customer details", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Number to search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);
    cy.get("#edit-customer-button > g > path").click();

    cy.get("[data-cy=first-name]").clear().type("Test Dallen"); // First Name
    cy.get("[data-cy=last-name]").clear().type("Test Gutierrez"); // Last Name
    cy.get(".vti__input").clear().type("8018678671"); // Phone Number
    cy.get("[data-cy=email]")
      .clear()
      .type("dallen.gutierrez+test@blytzpay.com"); // Email
    cy.get("[data-cy=dob]").clear().type("12/13/2002"); // Birthday
    cy.get("[data-cy=address]").clear().type("356 E La Vera Ln"); // Address
    cy.get("[data-cy=ssn]").clear().type("7878"); // Social Security Number
    cy.get("[data-cy=city]").clear().type("sandy"); // City
    cy.get("[data-cy=state]").select("Utah"); // State
    cy.get("[data-cy=zip]").clear().type("84070"); // Zip Code

    cy.get("[data-cy=save]").click();

    cy.get("[data-cy=first-name]").should("contain", "Test Dallen");
  });
  it("Send a Request", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Number to search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);

    cy.get(":nth-child(1) > .h-flex > :nth-child(2) > .btn").click();
    cy.get("[data-cy=send-payment-amount]").clear().type("22.22"); // Amount
    //Waive Fee
    //cy.get('#payment-modal___BV_modal_body_ > form > .custom-control > .custom-control-label').click()
    cy.get("#payment-modal___BV_modal_footer_ > .btn-blue").click();
    cy.wait(3000);
    cy.get("[data-cy=amount-due]").should("contain.value", "22.22");
  });
  it("Take a Payment", () => {
    cy.wait(2000);
    cy.get("[data-cy=customers]").click();
    cy.get("[data-cy=search]").clear().type("8018678671"); // Number to search
    cy.wait(2000);
    cy.get("table").contains("td", " +1 (801) 867-8671 ").click(); // ( +1 (XXX) XXX-XXXX )
    cy.wait(2000);

    cy.get(":nth-child(1) > .h-flex > :nth-child(1) > .btn").click();

    cy.get("[data-cy=name-on-card]").type("Dallen"); // Name on Card
    cy.get("[data-cy=card-number]").type("4111111111111111"); // Card Number
    cy.get("[data-cy=expiration]").type("1122"); // Expiration '1122' = 11/22
    cy.get("[data-cy=cvv]").type("999"); // CVV
    cy.get("[data-cy=take-payment-address]").type("1234"); // Address
    cy.get("[data-cy=postal-code]").type("84090"); // Zip Code
    cy.get("[data-cy=take-payment-amount]").clear().type("22"); // Amount

    //cy.get('.v-flex > .h-flex > .custom-control > .custom-control-label').click() // Waive Fee

    cy.wait(1000);
    cy.get("#take-payment-modal___BV_modal_footer_ > .btn-blue").click(); // Submit
    cy.wait(2000);
    cy.get("[data-cy=amount-due]").should("contain.value", "0.00");
  });
  it("Create a Template", () => {
    cy.wait(2000);
    cy.get("[data-cy=templates]").click();
    cy.get("[data-cy=create-template]").click(); // Create template button

    cy.get(".input-group > [data-cy=delta-days-selection]").select(
      "After due date"
    ); // Message Delivery (On/Before/After due date)
    cy.get(".days-container").type(template_days); //REQUIRED
    cy.get("[data-cy=subject]").type("Test TempLate"); // Template Name
    cy.get("[data-cy=first-name-snippet] > div").click(); // {{First Name}} button
    cy.get("[data-cy=last-name-snippet] > div").click(); // {{Last Name}} button
    cy.get("[data-cy=due-date-snippet] > div").click(); // {{Due Date}} button
    cy.get("[data-cy=textfield]").type("Testtesteseteset"); // Message

    cy.get(":nth-child(3) > .btn").click(); // Save
    cy.get(".cancel > a > span").click(); // Cancel

    //cy.get("#num_per_page").select("100");
    cy.wait(2000);
    cy.contains("td", "Test TempLate").should("exist");
  });
  it("Edit a Template", () => {
    cy.wait(2000);
    cy.get("[data-cy=templates]").click();
    //cy.get("#num_per_page").select("100");
    cy.get(".message-template-container").contains("Test TempLate").click(); ///  .contains("any Template Name")

    cy.get(".input-group > [data-cy=delta-days-selection]").select(
      "Before due date"
    ); // Message Delivery (On/Before/After due date)
    cy.get(".days-container").clear().type(edit_templates_days); //REQUIRED
    cy.get("[data-cy=subject]").clear().type("Edited Test TempLate"); // Template Name
    cy.get("[data-cy=first-name-snippet] > div").click(); // {{First Name}} button
    cy.get("[data-cy=last-name-snippet] > div").click(); // {{Last Name}} button
    cy.get("[data-cy=due-date-snippet] > div").click(); // {{Due Date}} button
    cy.get("[data-cy=textfield]").clear().type(" with some edited text"); // Message

    cy.get(":nth-child(3) > .btn").click(); // Save
    cy.wait(1000);
    cy.get(".cancel > a > span").click(); // Cancel
    //cy.get("#num_per_page").select("100");
    cy.wait(2000);
    cy.contains("tr", "Edited Test TempLate").should("exist");
  });
  it("Disables/Activate a Template", () => {
    cy.wait(2000);
    cy.get("[data-cy=templates]").click();

    cy.wait(2000);
    //.contains("td", "Template Name")
    //cy.get("#num_per_page").select("100");
    cy.contains("td", "Edited Test TempLate")
      .parent()
      .find('div[class="custom-checkbox custom-control custom-checkbox"]')
      .click("left")
      .should("not.be.enabled");
  });
  it("Send an Invite", () => {
    cy.wait(2000);
    cy.get("[data-cy=merchant-settings]").click();
    cy.get("[data-cy=settings-nav-user-management]").click();
    cy.wait(2000);
    cy.get("[data-cy=invite-merchant-user-btn]").click(); // Invite Button

    cy.get('[data-cy="first-name"]').type("Test First Name"); // First Name
    cy.get('[data-cy="last-name"]').type("Test Last Name"); // Last Name
    cy.get("[data-cy=email]").type("dallen.gutierrez+test1@blytzpay.com"); /// Change Email - No Existing
    cy.get(".input-group > [data-cy=merchant-invite-role-selector]").select(
      "admin"
    ); /// Admin or Staff
    cy.get("[data-cy=send-merchant-user-invite]").click(); // Send Invite
    cy.wait(2000);

    cy.contains("td", "dallen.gutierrez+test1@blytzpay.com").should("exist");
  });
  it("Resend an Invite", () => {
    //  cy.contains('td', 'Email')
    cy.contains("td", "dallen.gutierrez+test1@blytzpay.com")
      .parent()
      .find("[data-cy=resendinvite]")
      .click();

    cy.get(".toasted").should("contain", "sent");
  });
  it("Delete an Invite", () => {
    //  cy.contains('td', 'Email')
    cy.contains("td", "dallen.gutierrez+test1@blytzpay.com")
      .parent()
      .find("[data-cy=disableinvite]")
      .click();
    cy.wait(1000);
    cy.contains("td", "dallen.gutierrez+test1@blytzpay.com").should(
      "not.exist"
    );
  });
  it("Deactivate a CRUD user", () => {
    cy.wait(2000);
    //  cy.contains('td', 'Email')
    cy.contains("td", "dallen.gutierrez+work@blytzpay.com")
      .parent()
      .find('span[data-cy="disableuser"]')
      .click();
    cy.get("[data-cy=disable-user-btn]").click(); // Disable Button
    cy.wait(1000);
    cy.contains("td", "dallen.gutierrez+work@blytzpay.com")
      .parent()
      .find("td", "Inactive")
      .should("exist");
  });
  it("Change Logo", () => {
    cy.wait(2000);
    cy.get("[data-cy=merchant-settings]").click();

    //cy.get('[data-cy=logo]').clear().type('https://www.carlogos.org/car-logos/tesla-logo.png')//Tesla
    cy.get("[data-cy=logo]")
      .clear()
      .type(
        "https://static.rfstat.com/renderforest/images/v2/logo-homepage/alphabet_4.png"
      ); //LV

    cy.get(".btn-blue").click(); // Save Button
    cy.wait(1000);
    cy.get("[data-cy=logo]").should(
      "have.value",
      "https://static.rfstat.com/renderforest/images/v2/logo-homepage/alphabet_4.png"
    );
  });
});
