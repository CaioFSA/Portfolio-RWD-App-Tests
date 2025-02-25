import LoginPage from '../js/loginPage'
import newUserData from '../data/newUserPageData.json'
import NewUserPage from '../js/newUserPage'

const loginPage = new LoginPage()
const newUserPage = new NewUserPage()

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        loginPage.accessLoginPage()
        loginPage.clickSignUpButton()
        newUserPage.checkNewUserPage()
        newUserPage.fillSignUpForm(
            newUserData.newUserRegister.firstName,
            newUserData.newUserRegister.lastName,
            newUserData.newUserRegister.username,
            newUserData.newUserRegister.password,
            newUserData.newUserRegister.confirmPassword
        )
        loginPage.checkLoginPage()
    });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        newUserPage.accessSignUpPage()
        newUserPage.clickButtonSignUpToFail()
        newUserPage.checkInvalidSignUP()
    });
  });