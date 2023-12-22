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
        return cy.get(this.cartInfoPanel).children().find(this.strongElement).contains(this.emptyItemsData);
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
        return cy.get(this.emptyCartPanel).find(this.h2Element).contains(this.emptyCartData);
    }

    assertProceedToCheckoutButtonIsDisabled() {
        return cy.get(this.cartPanel).find(this.actionBlockClass).find(this.buttonElement).should("have.class", this.disabledClass);
    }

    assertCartIsHidden() {
        return cy.get(this.cartPanel).should("not.have.class", this.activeClass);
    }

    clickProceedToCheckoutButton() {
        return cy.get(this.cartPanel).find(this.actionBlockClass).find(this.buttonElement).contains(this.proceedToCheckoutContent).click();
    }

    addSingleProductToCart(product, times) {
        for (let i = 0; i < times; i++) {
            cy.get(".product").contains("h4", product).parent().find(".stepper-input").contains(".increment", "+").click();
        }
        return cy.get(".product").contains("h4", product).parent().find(".product-action").contains("button", "ADD TO CART").click();
    }

    validateQuantityAndPrice(quantity, price) {
        cy.get(this.cartInfoPanel).find("table > tbody > tr > td").contains("Items").parent().find("strong").contains(`${quantity}`);
        cy.get(this.cartInfoPanel).find("table > tbody > tr > td").contains("Price").parent().get("strong").contains(`${price}`);
    }

    typeIntoSearchBar(text) {
        cy.get(".search-keyword").type(text);
    }

    validateOnlyOneResultExists(product) {
        cy.get(".products").children().should("have.length", 1);
        cy.get(".products").children().contains("h4", product).should("exist");
    }
}

export default Homepage;