
Cypress.Commands.add('waitForPageToLoad', (options) => {
    cy.get(":animated", options).should("not.exist");
    cy.document(options).should((doc) =>
    {
        expect(doc.readyState, "WaitForPageToLoad").to.be.oneOf(["interactive", "complete"]);
    });
})

Cypress.Commands.add('onPaymentPage', (options) => {
    //note: :( should look at removing the change in timeout and make it check
    //       the other pages are shown
    cy.url(options).should("include", Cypress.config('checkoutPartlialUrl'));
    cy.title(options).should("be.equals", 'Banked | Checkout');
})


Cypress.Commands.add('onBasePage', (options) => {
    //note: :( should look at removing the change in timeout and make it check
    //       the other pages are shown
    cy.url(options).should("be.equals", Cypress.config('baseUrl'));
    cy.title(options).should("include", 'Banked | Checkout');
})

Cypress.Commands.add('insufficientFunds', (options) => {
    const failedText = 'Insufficient fundsPayment has been declinedPlease transfer funds and try again.Try again with this accountChange bankCancel'
    cy.get(":animated", options).should("not.exist");
    cy.get('div[data-testid="payment-failed"]', options).should('be.visible');
    cy.get('div[data-testid="payment-failed"]', options).should('include.text', failedText);
})

Cypress.Commands.add('failedAgreement', (options) => {
    const failedText = 'Payment FailedThis account cannot be used to pay.Please try another account.Change accountChange bankCancel'
    cy.get(":animated", options).should("not.exist");
    cy.get('div[data-testid="payment-failed"]', options).should('be.visible');
    cy.get('div[data-testid="payment-failed"]', options).should('include.text', failedText);
})

Cypress.Commands.add('selectBank', (bankName) => {
    cy.get('button[data-testid="provider-button"]').contains(bankName).click()
})

Cypress.Commands.add('fillAccountName', (accoutnName) => {
    cy.get('input[data-testid="ACCOUNT_NAME"]').type(accoutnName)
})

Cypress.Commands.add('fillBSB', (bsb) => {
    cy.get('input[data-testid="BSB_NUMBER"]').type(bsb)
})

Cypress.Commands.add('fillAccountNumber', (accountNumber) => {
    cy.get('input[data-testid="ACCOUNT_NUMBER"]').type(accountNumber)
})

Cypress.Commands.add('submitAccountDetails', () => {
    cy.get('button[data-testid="supplemental-attr-form-submit"]').click()
})




Cypress.Commands.add('startFlow', (flowName, country, checkoutType) => {
    cy.visit('/')
    cy.get(`input[id="${flowName}"]`).check();
    cy.get('select[data-testid="region-selector"]').select(country);
    cy.get(`button[data-testid="${checkoutType}"]`).click();
    cy.onPaymentPage({timeout: 20000})
})
