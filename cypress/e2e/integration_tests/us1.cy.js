import Homepage from "../../page_object_model/homepage";

describe('US1', () => {
  const homepage = new Homepage();
  
  beforeEach(() => {
    // visit home
    homepage.visitRoot();
  });

  it('View empty shopping chart', () => {
    const homepage = new Homepage();

    // assert that the two numbers on top right (Items and Price) are zero
    homepage.assertZeroItemsPrice();

    // click on the bag icon in the top right
    homepage.clickOnCartBagButton();

    // ensure that user stays on the same page
    homepage.assertStayOnSamePage();
    
    // ensure that shopping cart pops up under bag icon
    homepage.assertCartHasAppeared();

    // ensure that the message "Your cart is empty!" is displayed
    homepage.assertEmptyCartMessageAppears();

    // ensure that the PROCEED TO CHECKOUT button is disabled
    homepage.assertProceedToCheckoutButtonIsDisabled();

    // click on the bag icon again
    homepage.clickOnCartBagButton();

    // ensure shopping cart is hidden
    homepage.assertCartIsHidden();
  });

  it("Checkout an empty shopping cart", () => {
    const homepage = new Homepage();

    homepage.assertZeroItemsPrice();

    homepage.clickOnCartBagButton();

    homepage.assertEmptyCartMessageAppears();

    homepage.assertProceedToCheckoutButtonIsDisabled();

    homepage.clickProceedToCheckoutButton();

    homepage.assertStayOnSamePage();

    homepage.clickOnCartBagButton();

    homepage.assertCartIsHidden();
  });

  it("Add single product to cart multiple times", () => {
    const homepage = new Homepage();
    
    homepage.addSingleProductToCart("Brocolli", 3);

  });

  // it("Add multiple distinct items to cart", () => {

  // });
});