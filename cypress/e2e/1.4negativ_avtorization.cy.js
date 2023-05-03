describe("Негативный кейс авторизации", function () {
  it("Неправильный логин, верный пароль", function () {
    cy.visit("Login.QA.Studio");
    cy.get("#mail").type("ASDWfg@gmail.com");
    cy.get("#pass").type("iLoveqastudio1");

    cy.get("#loginButton").click();
    cy.contains("Такого логина или пароля нет");
    cy.get("#exitMessageButton > .exitIcon");
  });
});
