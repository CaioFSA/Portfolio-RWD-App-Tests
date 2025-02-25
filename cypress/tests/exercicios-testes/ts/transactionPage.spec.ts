import TransactionPage from '../js/transactionPage'
import LoginPage from '../js/loginPage'
import userData from '../data/loginPageData.json'


const transactionPage = new TransactionPage()
const loginPage = new LoginPage()


describe('Real World App Transaction Automation', () => {

    it('should complete a transaction and verify the details', () => {
        let initialBalance;

        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

        // Step 1: Acessar a homePage
        transactionPage.methods.verifyHomePage();

        // Step 2: Verificar o valor no campo "account balance"
        transactionPage.methods.getAccountBalance().then((balance) => {
            initialBalance = balance;
        });

        // Step 3: Clicar em "$NEW"
        transactionPage.methods.startNewTransaction();

        // Step 4: Clicar em "Kristian Bradtke"
        transactionPage.methods.selectContact();

        // Step 5: Preencher os campos "amount" e "add a note"
        transactionPage.methods.fillTransactionDetails('222.00', 'Pagamento realizadO');

        // Step 6: Clicar em "pay"
        transactionPage.methods.submitPayment();

        // Step 7: Verificar se a mensagem "transaction submited!" aparece na tela
        transactionPage.methods.verifyTransactionSubmitted();

        // Step 8: Clicar em "return to transactions"
        transactionPage.methods.returnToTransactions();

        // Step 9: Verificar se voltou para a homePage
        transactionPage.methods.verifyHomePage();

        // Step 10: Verificar novamente o valor no campo "account balance"
        transactionPage.methods.verifyUpdatedBalance(initialBalance);

    });
});

