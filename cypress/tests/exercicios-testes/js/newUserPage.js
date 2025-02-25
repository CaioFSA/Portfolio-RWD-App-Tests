class NewUserPage {

    selectorsList() {
        const selectors = {
            firstNameField: '#firstName',
            lastNameField: '#lastName',
            usernameField: '#username',
            passwordField: '#password',
            confirmPasswordField: '#confirmPassword',
            signUpButton: '[data-test="signup-submit"]',
            wrongCredentialAlert: '#firstName-helper-text',
            newUserPageGrid: '.SignUpForm-paper'
        }

        return selectors
    }

    accessSignUpPage() {
        cy.visit('http://localhost:3000/signup')
    }

    fillSignUpForm(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().usernameField).clear().type(username)
        cy.get(this.selectorsList().passwordField).clear().type(password)
        cy.get(this.selectorsList().confirmPasswordField).clear().type(confirmPassword)
        cy.get(this.selectorsList().signUpButton).click()
        
    }

    checkInvalidSignUP() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    clickButtonSignUpToFail(){
        cy.get(this.selectorsList().signUpButton).click()
    }

    checkNewUserPage() {
        cy.location('pathname').should('eq', '/signup')
        cy.get(this.selectorsList().newUserPageGrid).should('be.visible')
    }
}

export default NewUserPage