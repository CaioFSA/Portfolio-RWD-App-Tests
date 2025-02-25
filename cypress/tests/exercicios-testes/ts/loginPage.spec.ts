import userData from '../data/loginPageData.json'
import LoginPage from '../js/loginPage'
import HomePage from '../js/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()


describe('Login com sucesso RWD-APP', () => {
    it('Deve fazer login com um usuário válido', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        homePage.checkHomePage()
    });
});


describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    });
});
