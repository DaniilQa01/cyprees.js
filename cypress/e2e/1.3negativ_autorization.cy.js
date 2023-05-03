describe('Негативный кейс авторизации', function () {
    it('Правильный логин, неверный проль', function () {
        cy.visit('Login.QA.Studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('german');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');

    })

})