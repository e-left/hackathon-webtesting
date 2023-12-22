import CartPage from '../../page_object_model/cartpage';
import Homepage from '../../page_object_model/homepage';

describe('Use Promo Codes/Coupons for an Order', () => {
  beforeEach(() => {
    const homepage = new Homepage();

    // visit the homepage
    homepage.visitRoot();

    // select brocolli and cauliflower
    homepage.addSingleProductToCart('Brocolli', 0);
    homepage.addSingleProductToCart('Cauliflower', 0);

    homepage.clickOnCartBagButton();
    homepage.clickProceedToCheckoutButton();
  });

  it('Add valid promo code', () => {
    // User can add a valid promo code
    const page = new CartPage();

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });

  it('Add valid promo code once', () => {
    // User should be able to add a valid promo code and get the discount once
    const page = new CartPage();

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');

    page.getPromoCodeInput().clear();
    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });

  it('Add valid promo code and not lose it after with empty code', () => {
    // User should be able to add a discount code and not lose his discount if he tries to add an empty code after

    const page = new CartPage();

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');

    page.getPromoCodeInput().clear();
    page.getApplyButton().click();

    page.showsEmptyCodeMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });

  it('Add valid promo code and not lose it after with invalid code', () => {
    // User should be able to add a discount code and not lose his discount if he tries to add an invalid code after
    const page = new CartPage();

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');

    page.getPromoCodeInput().clear();
    page.getPromoCodeInput().type('invalidPromoCode');
    page.getApplyButton().click();

    page.showsInvalidCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');
  });

  it('Discount from valid after invalid promo code', () => {
    // User should be able to get the discount of a valid promo code in case he added an invalid one before
    const page = new CartPage();

    page.getPromoCodeInput().type('invalidPromoCode');
    page.getApplyButton().click();

    page.showsInvalidCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');

    page.getPromoCodeInput().clear();
    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });

  it('Invalid promo code', () => {
    // User shouldn't be able to get a discount using an invalid promo code
    const page = new CartPage();

    page.getPromoCodeInput().type('invalidPromoCode');
    page.getApplyButton().click();

    page.showsInvalidCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');
  });

  it('No promo code entered', () => {
    // User shouldn't be able to get a discount without entering any promo codes
    const page = new CartPage();

    page.getApplyButton().click();

    page.showsEmptyCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');
  });

  it('Invalid promo code after not entering one', () => {
    // User shouldn't be able to get a discount without entering any promo codes and then entering an invalid one
    const page = new CartPage();

    page.getApplyButton().click();

    page.showsEmptyCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');

    page.getPromoCodeInput().type('invalidPromoCode');
    page.getApplyButton().click();

    page.showsInvalidCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');
  });

  it('Discount with valid promo code after accidental button click', () => {
    // User should be able get a discount using a valid promo code in case he tried to get one before using an empty code
    const page = new CartPage();

    page.getApplyButton().click();

    page.showsEmptyCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });

  it('Valid promo code entered twice with an invalid one inbetween', () => {
    // User should be able to get a discount using a valid promo code and shouldn't be able to get a discount again after despite entering an invalid one right after
    const page = new CartPage();

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');

    page.getPromoCodeInput().clear();
    page.getPromoCodeInput().type('invalidPromoCode');
    page.getApplyButton().click();

    page.showsInvalidCodeMessage();
    page.checkDiscount('0%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('180');

    page.getPromoCodeInput().clear();
    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });

  it('Valid promo code entered twice with an empty one inbetween', () => {
    // User should be able to get a discount using a valid promo code and shouldn't be able to get a discount again after despite entering an empty one right after
    const page = new CartPage();

    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');

    page.getPromoCodeInput().clear();
    page.getApplyButton().click();

    page.showsEmptyCodeMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');

    page.getPromoCodeInput().clear();
    page.getPromoCodeInput().type('rahulshettyacademy');
    page.getApplyButton().click();

    page.showsCodeAppliedMessage();
    page.checkDiscount('10%');
    page.checkNumberOfItems('2');
    page.checkTotalAmount('180');
    page.checkTotalAfterDiscount('162');
  });
});
