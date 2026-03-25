class LoginPage {
  usernameInput = '#user-name'
  passwordInput = '#password'
  loginButton = '#login-button'
  errorMessage = '[data-test="error"]'

  visit() {
    cy.visit('/')
  }

  fillUsername(username: string) {
    cy.get(this.usernameInput).type(username)
  }

  fillPassword(password: string) {
    cy.get(this.passwordInput).type(password)
  }

  submit() {
    cy.get(this.loginButton).click()
  }

  login(username: string, password: string) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }
}

export default new LoginPage()