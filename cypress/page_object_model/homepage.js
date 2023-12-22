class Homepage {
    get fullUrl() {
        return 'https://rahulshettyacademy.com/seleniumPractise/';
    }
    get cartInfoPanel() {
        return ".cart-info";
    }

    get cartBagButton() {
        return '[alt="Cart"]';
    }

    get activeClass() {
        return 'active';
    }

    get strongElement() {
        return "strong";
    }

    get emptyItemsData() {
        return "0";
    }

    get cartPanel() {
        return ".cart-preview";
    }

    get emptyCartPanel() {
        return ".empty-cart";
    }

    get h2Element() {
        return "h2";
    }

    get emptyCartData() {
        return "You cart is empty!";
    }

    get buttonElement() {
        return "button";
    }

    get actionBlockClass() {
        return ".action-block";
    }

    get disabledClass() {
        return "disabled";
    }

    get proceedToCheckoutContent() {
        return "PROCEED TO CHECKOUT";
    }

    visitRoot() {
        return cy.visit("/");
    }

    assertZeroItemsPrice() {
        return cy.get(this.cartInfoPanel).children().get(this.strongElement).contains(this.emptyItemsData);
    }

    clickOnCartBagButton() {
        return cy.get(this.cartBagButton).click();
    }

    assertStayOnSamePage() {
        return cy.url().should("equal", `${this.fullUrl}#/`);
    }

    assertCartHasAppeared() {
        return cy.get(this.cartPanel).should("have.class", this.activeClass);
    }

    assertEmptyCartMessageAppears() {
        cy.get(this.emptyCartPanel).should('exist');
        return cy.get(this.emptyCartPanel).get(this.h2Element).contains(this.emptyCartData);
    }

    assertProceedToCheckoutButtonIsDisabled() {
        return cy.get(this.cartPanel).get(this.actionBlockClass).get(this.buttonElement).should("have.class", this.disabledClass);
    }

    assertCartIsHidden() {
        return cy.get(this.cartPanel).should("not.have.class", this.activeClass);
    }

    clickProceedToCheckoutButton() {
        return cy.get(this.cartPanel).get(this.actionBlockClass).get(this.buttonElement).contains(this.proceedToCheckoutContent).click();
    }

    addSingleProductToCart(product, times) {
        for (let i = 0; i < times; i++) {
            cy.get(".product").contains("h4", product).parent().get(".stepper-input").contains(".increment", "+").click();
        }
        return cy.get(".product").contains("h4", product).parent().get(".product-action").contains("button", "ADD TO CART").click();
    }

    validateQuantityAndPrice(quantity, price) {
        cy.get(this.cartInfoPanel).get("table > tbody > tr > td").contains("Items").parent().get("strong").contains(`${quantity}`);
        cy.get(this.cartInfoPanel).get("table > tbody > tr > td").contains("Price").parent().get("strong").contains(`${quantity}`);
        // return cy.get(this.cartInfoPanel).contains("Price").parent().get("strong").contains(`${price}`);
    }

}

export default Homepage;