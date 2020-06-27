const assert = require("chai").assert;

describe("Test", () => {

    before(() => {
        browser.setWindowSize(500, 700);
    })

    it("Main Menu should be hidden", () => {
        browser.url("https://demo.applitools.com/gridHackathonV1.html");
        assert.isFalse($("#DIV__mainmenu__15").isDisplayed());
    });

    it("Size options should be hidden", () => {
        browser.url("https://demo.applitools.com/gridHackathonProductDetailsV1.html?id=1");
        const result = $$(".custom-select-form li").map(element => element.isDisplayed())
        assert.notInclude(result, true);
    })
});
