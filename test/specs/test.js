const assert = require("chai").assert;

describe("Test", () => {
    it("isDisplayed", () => {
        browser.setWindowSize(500, 700);
        browser.url("https://demo.applitools.com/gridHackathonV1.html");
        browser.saveScreenshot("test.png");
        const isDisplayed = $("#DIV__mainmenu__15").isDisplayed();
        console.log(isDisplayed);
        assert.isFalse(isDisplayed);
    });
});
