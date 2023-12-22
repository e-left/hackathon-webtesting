import CartPage from '../../page_object_model/cartpage';

describe('Use Promo Codes/Coupons for an Order', () => {
  beforeEach(() => {
    // visit the home page
    cy.visit('/');

    // select brocolli and cauliflower
  });

  it('test1', () => {
    const page = new CartPage();
    page.checkItemQuantity('Brocolli - 1 Kg', '2');
    page.checkItemPrice('Brocolli - 1 Kg', '120');
    page.checkItemTotal('Brocolli - 1 Kg', '240');
  })
});
