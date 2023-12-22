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
    return this.getPromoInfo().should('contain', 'Empty code ..!'); // red
  }

  showsCodeAppliedMessage() {
    return this.getPromoInfo().should('contain', 'Code applied ..!'); // green
  }

  showsInvalidCodeMessage() {
    return this.getPromoInfo().should('contain', 'Invalid code ..!');
  }

  checkNumberOfItems(text) {
    return cy.contains('No. of Items').parent().should('contain', `No. of Items     : ${text}`);
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

  clickPlaceOrder() {
    return cy.contains('Place Order').click();
  }

  checkTableColumnNames() {
    // get the table thead list of strings
    const items = [];
    cy.get('thead b').each($li => items.push($li.text()));

    return cy.wrap(items).should('deep.equal', ['#', 'Product Name', 'Quantity', 'Price', 'Total']);
  }

  getItemRow(productText) {
    // this function returns a table row of a specific item by text
    return cy.get('table tr').contains(productText).parent('td').parent();
  }

  checkItemQuantity(productText, quantity) {
    return this.getItemRow(productText).find('.quantity').should('contain', quantity);
  }

  checkItemPrice(productText, price) {
    return this.getItemRow(productText).find('td').eq(3).should('contain', price);
  }

  checkItemTotal(productText, total) {
    return this.getItemRow(productText).find('td').eq(4).should('contain', total);
  }
}

export default CartPage;
