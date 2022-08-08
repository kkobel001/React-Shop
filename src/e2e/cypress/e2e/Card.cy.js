describe('Card', () => {
  it('adds products to cart', () => {
    cy.visit('/shop');
    cy.contains('button', 'view more').click();
    cy.contains('button', 'Add to Card').click();
    cy.get('[data-testid="nav-element"]').click();
    cy.get('[data-testid="button-add"]').click();
    cy.get('.btn-order').click();
  });
});
