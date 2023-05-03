describe('Автотест на проверку логики восстановления пароля', function () {
    it('клик забыл пароль', function () {
         cy.visit('Login.QA.Studio');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('ostrovskijd743@gmail.com');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');

        })
    })