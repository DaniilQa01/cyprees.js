describe('Автотест на авторизацию', function () {
    it('Ввод верного логина и пароля', function () {
         cy.visit('Login.QA.Studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');

        
     })
 })