const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("port", () => {

    it("port can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it("has a name property", () => {
        const port = new Port("Dover");

        expect(port.name).toEqual("Dover")
    })

});

