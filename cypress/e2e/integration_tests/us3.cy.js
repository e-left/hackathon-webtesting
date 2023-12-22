import Homepage from "../../page_object_model/homepage";

describe('US3', () => {
  const homepage = new Homepage();
  
  beforeEach(() => {
    // visit home
    homepage.visitRoot();
  });

  it("Searches for part of product", () => {
    const homepage = new Homepage();
    homepage.typeIntoSearchBar("Broc");

    homepage.validateOnlyOneResultExists("Brocolli");
  });

  it("Search is case-insensitive", () => {
    const homepage = new Homepage();
    homepage.typeIntoSearchBar("broc");

    homepage.validateOnlyOneResultExists("Brocolli");
  });

  it("Can search for full product", () => {
    const homepage = new Homepage();
    homepage.typeIntoSearchBar("Cauliflower");

    homepage.validateOnlyOneResultExists("Cauliflower");
  });

  it("Can search for middle part of product", () => {
    const homepage = new Homepage();
    homepage.typeIntoSearchBar("uliflo");

    homepage.validateOnlyOneResultExists("Cauliflower");
  });

});