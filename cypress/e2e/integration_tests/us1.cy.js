describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('/');
  
      cy.contains('Top Deals').click();
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.contains("Discount price");
    })
  })