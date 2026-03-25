import LoginPage from '../../pages/LoginPage'

describe('Login - SauceDemo', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Deve realizar login com sucesso', () => {
    cy.fixture('users').then((user) => {
      LoginPage.login(user.validUser.username, user.validUser.password)
      cy.url().should('include', '/inventory.html')
    })
  })

  it('Deve exibir erro para usuário bloqueado', () => {
    cy.fixture('users').then((user) => {
      LoginPage.login(user.invalidUser.username, user.invalidUser.password)
      cy.get(LoginPage.errorMessage).should('be.visible')
    })
  })

  it('Deve exibir erro com campos vazios', () => {
    LoginPage.submit()
    cy.get(LoginPage.errorMessage).should('be.visible')
  })

  it('Deve exibir erro para senha inválida', () => {
    LoginPage.login('standard_user', 'senha_errada')
    cy.get(LoginPage.errorMessage).should('be.visible')
  })
})