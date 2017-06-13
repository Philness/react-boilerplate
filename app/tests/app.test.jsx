var expect = require("expect");

describe("App", () =>{
    it("should display some kind of test here", () => {
        expect(3).toBe(3);
        expect(3).toNotBe(2);
        expect(3).toNotBe(5);  //this is right out
    });
});