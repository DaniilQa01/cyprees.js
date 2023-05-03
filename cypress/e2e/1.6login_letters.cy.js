describe('Проверка на приведение к строчным буквам в логине', function () {
    it('Верный пароль, логин с заглавными буквами', function () {
        cy.visit('Login.QA.Studio');
        cy.visit('Login.QA.Studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get("#exitMessageButton > .exitIcon");

    })

})