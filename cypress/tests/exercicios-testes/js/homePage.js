class HomePage {

    selectorList() {
        const selectors = {
            homePageGrid: '[data-test="main"]',
            transactionHistoryGrid: '[data-test="transaction-list"]',
            dateSelectorOfTransactionsButton: '[data-test="transaction-list-filter-date-range-button"]',
            everyoneButton: '[data-test="nav-public-tab"]',
            dateSelectorButton: ".Cal__Day__root",
            noTransactionMessage: "[data-test='empty-list-header']",
            dateSelectorGrid: '.Cal__Container__root',
        }

        return selectors
    }

    checkHomePage() {
        cy.location('pathname').should('eq', '/')
        cy.get(this.selectorList().homePageGrid).should('be.visible')
    }

    checkTransactionHistory() {
        cy.location('pathname').should('eq', '/')
        cy.get(this.selectorList().transactionHistoryGrid).should('be.visible')
    }

    clickEveryoneButton() {
        cy.get(this.selectorList().everyoneButton).click()
    }

    clickDateSelectorsOfTransactions() {
        cy.get(this.selectorList().dateSelectorOfTransactionsButton).click({ force: true })
    }
    
    clickDateSelector() {
        cy.get(this.selectorList().dateSelectorButton).eq(0).click({ force: true })
    }

    noTransactionMessage() {
        cy.get(this.selectorList().noTransactionMessage).should('be.visible')
    }

    checkDateSelectorGrid() {
        cy.get(this.selectorList().dateSelectorGrid).should('be.visible')
        cy.wait(1000)
    }
}


export default HomePage