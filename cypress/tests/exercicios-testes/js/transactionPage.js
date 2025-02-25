class TransactionPage {

    selectors = {
        accountBalance: "[data-test='sidenav-user-balance']",
        newTransactionButton: "[href='/transaction/new']",
        contactButton: '.MuiListItemText-multiline',
        amountField: '#amount',
        noteField: "#transaction-create-description-input",
        payButton: "[data-test='transaction-create-submit-payment']",
        transactionSubmittedMessage: '.MuiAlert-message',
        returnToTransactionsButton: "[data-test='new-transaction-return-to-transactions']"
    };

    methods = {
        accessHomePage: () => {
            cy.visit('http://localhost:3000/');
        },

        getAccountBalance: () => {
            return cy.get(this.selectors.accountBalance).invoke('text').then((balance) => {
                return parseFloat(balance.replace(/[^0-9.-]+/g, ''));
            });
        },

        startNewTransaction: () => {
            cy.get(this.selectors.newTransactionButton).click();
        },

        selectContact: () => {
            cy.get(this.selectors.contactButton).eq(0).click();
        },

        fillTransactionDetails: (amount, note) => {
            cy.get(this.selectors.amountField).type(amount);
            cy.get(this.selectors.noteField).type(note);
        },

        submitPayment: () => {
            cy.get(this.selectors.payButton).click();
        },

        verifyTransactionSubmitted: () => {
            cy.get(this.selectors.transactionSubmittedMessage).should('be.visible');
        },

        verifyUpdatedBalance: (initialBalance) => {
            cy.get(this.selectors.accountBalance).invoke('text').then((newBalance) => {
                const newBalanceValue = parseFloat(newBalance.replace(/[^0-9.-]+/g, ''));
                expect(newBalanceValue).not.to.equal(initialBalance); // Verifica se o saldo mudou
            });
        },

        returnToTransactions: () => {
            cy.get(this.selectors.returnToTransactionsButton).click();
        },

        verifyHomePage: () => {
            cy.url().should('include', '/');
        }
    };
}

export default TransactionPage
