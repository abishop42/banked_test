describe('payment tests for new customer', () => {

    const postiveFlowCustomer = {
        bank: 'Mock Bank',
        accoutnName: 'Positive Flow',
        bsb: '111-114',
        account: '12345678'
    }

    const failedAgreementFlowCustomer = {
        bank: 'Mock Bank',
        accoutnName: 'Failed Agreement Flow',
        bsb: '111-114',
        account: '030312'
    }

    const insufficientFundsFlowCustomer = {
        bank: 'Mock Bank',
        accoutnName: 'Insufficient Funds Flow',
        bsb: '111-114',
        account: '030324'
    }



    beforeEach(() => {
        cy.startFlow('new-customer', 'AU', 'create-hosted-checkout');
    })

    it('make successful payment', () => {
        cy.selectBank(postiveFlowCustomer.bank)
        cy.fillAccountName(postiveFlowCustomer.accoutnName)
        cy.fillBSB(postiveFlowCustomer.bsb)
        cy.fillAccountNumber(postiveFlowCustomer.account)
        cy.submitAccountDetails()
        cy.onBasePage({timeout: 20000})
    })

    it('failed payment - failed payment agreement', () => {
        cy.selectBank(failedAgreementFlowCustomer.bank)
        cy.fillAccountName(failedAgreementFlowCustomer.accoutnName)
        cy.fillBSB(failedAgreementFlowCustomer.bsb)
        cy.fillAccountNumber(failedAgreementFlowCustomer.account)
        cy.submitAccountDetails()
        cy.failedAgreement({timeout: 20000})
        
    })

    it('failed payment - Insufficient Funds', () => {
        cy.selectBank(insufficientFundsFlowCustomer.bank)
        cy.fillAccountName(insufficientFundsFlowCustomer.accoutnName)
        cy.fillBSB(insufficientFundsFlowCustomer.bsb)
        cy.fillAccountNumber(insufficientFundsFlowCustomer.account)
        cy.submitAccountDetails()
        cy.insufficientFunds({timeout: 20000})
        
    })

});  

