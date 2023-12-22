class TopDealsPage {
    visitTopDealsPage() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    }

    clickSortButtonFirstColumn() {
        return cy.contains("Veg/fruit name").parent().find(".sort-icon").click();
    }

    validateSortOfFirstColumn(reverse) {

    }


}

export default TopDealsPage;