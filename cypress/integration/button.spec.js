describe('Button', () => {
  it('should toggle To Do and Done', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-rbd-drag-handle-draggable-id="drag-2"]')
      .contains('To do')
      .click();
    cy.get('[data-rbd-drag-handle-draggable-id="drag-2"]')
      .contains('Done')
      .should('exist');
  });
});
