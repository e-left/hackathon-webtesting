import Homepage from "../../page_object_model/homepage";

describe('US1: Add Products in the Cart', () => {
  const homepage = new Homepage();
  
  before(() => {
    // visit home
    const rootUrl = homepage.rootUrl;
    cy.visit(rootUrl);
  });

  it('View empty shopping chart', () => {
    // assert that the two numbers on top right (Items and Price) are zero
    cy.get(".cart-info").children().get("strong").contains("0");

    // click on the bag icon in the top right
    cy.get('[alt="Cart"]').click();

    // ensure that user stays on the same page
    const fullUrl = homepage.fullUrl;
    cy.url().should("equal", `${fullUrl}#/`);

    // ensure that shopping cart pops up under bag icon
    cy.get(".cart-preview").should("have.class", "active");

    // ensure that the message "Your cart is empty!" is displayed
    cy.get(".cart-preview").contains("Your cart is empty!");

    // ensure that the PROCEED TO CHECKOUT button is disabled

    // ensure that the PROCEED TO CHECKOUT button is a light orange color

    // click on the bag icon again
    cy.get('[alt="Cart"]').click();

    // ensure shopping cart is hidden

  })
});