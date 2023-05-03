describe('Негативный кейс валидации', function () {
    it('Логин без @, правильный пароль', function () {
        cy.visit('Login.QA.Studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get("#exitMessageButton > .exitIcon");
        
  });
    })

