import '@testing-library/cypress/add-commands';

describe('react-shop', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('Renders unauthenticated app', () => {
    cy.get('[data-testid="login-element"]').click();
    cy.findByText(/login/i)
      .click()
      .type(process.env.AUTH_LOGIN_TEST);
    cy.findByText(/password/i)
      .click()
      .type(process.env.AUTH_PASSWORD_TEST);
    cy.findByText(/sing in/i).click();
  });
});
