class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            signInButton: '[data-test="signin-submit"]',
            wrongCredentialAlert:'[data-test="signin-error"]',
            loginPageGrid: '.SignInForm-form',
            signUpButton: "[data-test='signup']"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    checkLoginPage() {
        cy.location('pathname').should('eq', '/signin')
        cy.get(this.selectorsList().loginPageGrid).should('be.visible')
    }

    clickSignUpButton() {
        cy.get(this.selectorsList().signUpButton).click()
    }
}

export default LoginPage