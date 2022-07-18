import '@testing-library/cypress/add-commands';

describe('react-shop', () => {
  it('Renders unauthenticated app', () => {
    cy.visit('/home');
    cy.findByText(/login/i).should('exist');
  });

  it('Renders user to authenticate app', () => {
    cy.visit('/home');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i)
      .click()
      .type(process.env.AUTH_LOGIN_TEST);
    cy.findByText(/password/i)
      .click()
      .type(process.env.AUTH_PASSWORD_TEST);
    cy.findByText(/sing in/i).click();
  });
});
