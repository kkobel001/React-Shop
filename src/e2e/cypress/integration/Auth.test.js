import '@testing-library/cypress/add-commands';

describe('react-shop', () => {
  it('Renders unauthenticated app', () => {
    cy.visit('/');
  });
});
