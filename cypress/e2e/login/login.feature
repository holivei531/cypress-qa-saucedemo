Feature: Login no sistema SauceDemo

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When ele informa credenciais válidas
    And clica no botão de login
    Then deve ser redirecionado para a página de produtos

  Scenario: Login com usuário bloqueado
    Given que o usuário acessa a página de login
    When ele informa um usuário bloqueado
    And clica no botão de login
    Then deve visualizar uma mensagem de erro

  Scenario: Login com campos vazios
    Given que o usuário acessa a página de login
    When clica no botão de login sem preencher os campos
    Then deve visualizar mensagem de erro de campos obrigatórios

  Scenario: Login com senha inválida
    Given que o usuário acessa a página de login
    When informa senha inválida
    Then deve visualizar mensagem de erro