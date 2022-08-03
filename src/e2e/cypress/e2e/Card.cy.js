describe('Card', () => {
  it('adds products to cart', () => {
    cy.visit('http://localhost:3000');
    cy.contains('button', 'view more').click({ force: true });
    cy.contains('button', 'Add to Card');
    cy.contains('a.item-link', 1);
  });
});
