import '@testing-library/cypress/add-commands';

describe('react-shop', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('Renders unauthenticated app', () => {
    cy.get('[data-testid="login-element"]').click();
    cy.get('input').should('have.attr', 'placeholder', 'Email');
    cy.get('[name="email"]').type('test@test.pl');
    cy.get('[name="password"]').type('Test123!');
    cy.get('button')
      .first()
      .click();
  });
});
