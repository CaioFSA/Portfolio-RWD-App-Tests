import userData from '../data/loginPageData.json'
import LoginPage from '../js/loginPage'
import HomePage from '../js/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()


describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
    });
});

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
        homePage.checkTransactionHistory()
    });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
        homePage.checkTransactionHistory()
        homePage.clickEveryoneButton()
        homePage.clickDateSelectorsOfTransactions()
        homePage.checkDateSelectorGrid()
        homePage.clickDateSelector()
        homePage.clickDateSelector()
        homePage.noTransactionMessage()
    });
});