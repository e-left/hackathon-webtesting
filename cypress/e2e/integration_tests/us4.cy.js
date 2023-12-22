import TopDealsPage from "../../page_object_model/topdealspage";

describe('US4', () => {
  const topdealspage = new TopDealsPage();
  
  beforeEach(() => {
    // visit home
    topdealspage.visitTopDealsPage();
  });

  it("Should sort A to Z if you click the button once", () => {
    const topdealspage = new TopDealsPage();
    
    topdealspage.clickSortButtonFirstColumn();
    topdealspage.validateSortOfFirstColumn(false);
  });

  it("Should sort Z to A if you click the button twice", () => {
    const topdealspage = new TopDealsPage();
    
    topdealspage.clickSortButtonFirstColumn();
    topdealspage.clickSortButtonFirstColumn();
    topdealspage.validateSortOfFirstColumn(true);
  });

});