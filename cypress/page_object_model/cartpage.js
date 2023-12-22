class CartPage {
  getPromoCodeInput() {
    return cy.get('input.promoCode');
  }

  getApplyButton() {
    return cy.get('button.promoBtn');
  }

  getPromoInfo() {
    return cy.get('.promoInfo');
  }

  showsEmptyCodeMessage() {
    return this.getPromoInfo().should('contain', 'Empty code ..!');
  }

  showsCodeAppliedMessage() {
    return this.getPromoInfo().should('contain', 'Code applied ..!');
  }

  showsInvalidCodeMessage() {
    return this.getPromoInfo().should('contain', 'Invalid code ..!');
  }

  checkNumberOfItems(text) {
    return cy
      .contains('No. of Items : ')
      .invoke('text')
      .then(text => text.trim())
      .should('eq', text);
  }

  checkTotalAmount(text) {
    return cy.get('.totAmt').should('contain', text);
  }

  checkDiscount(text) {
    return cy.get('.discountPerc').should('contain', text);
  }

  checkTotalAfterDiscount(text) {
    return cy.get('.discountAmt').should('contain', text);
  }
}

export default CartPage;
