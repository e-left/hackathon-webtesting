import CartPage from '../../page_object_model/cartpage';
import Homepage from '../../page_object_model/homepage';

describe('Use Promo Codes/Coupons for an Order', () => {
  beforeEach(() => {
    const homepage = new Homepage();

    // visit the homepage
    homepage.visitRoot();

    // add 2 brocolli and 1 cauliflower
    homepage.addSingleProductToCart('Brocolli', 1);
    homepage.addSingleProductToCart('Cauliflower', 0);

    homepage.clickOnCartBagButton();
    homepage.clickProceedToCheckoutButton();

    cy.url().should('contain', 'cart');
  });

  it('Column numbers should be ok', () => {
    const page = new CartPage();
    page.checkItemQuantity('Brocolli - 1 Kg', '2');
    page.checkItemPrice('Brocolli - 1 Kg', '120');
    page.checkItemTotal('Brocolli - 1 Kg', '240');

    page.checkItemQuantity('Cauliflower - 1 Kg', '1');
    page.checkItemPrice('Cauliflower - 1 Kg', '60');
    page.checkItemTotal('Cauliflower - 1 Kg', '60');
  });

  it('2', () => {
    const page = new CartPage();
    page.checkTableColumnNames();
  })

  it('3', () => {
    const page = new CartPage();
    page.clickPlaceOrder();
    cy.get('select').select('Afghanistan').should('have.value', 'Afghanistan');
    cy.get('input[type="checkbox"]').click();
    cy.contains('Proceed').click();
    cy.contains('Thank you');
    cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/');
  })
});
