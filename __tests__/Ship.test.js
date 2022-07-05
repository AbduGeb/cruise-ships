/* globals describe it expect */
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Ship", () => {

    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        const port = new Port("Dover");
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port.name);
    });

});

describe("setSail", () => {

    it("can set sail", () => {
        const port = new Port("Dover");
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });
});

describe("dock", () => {

    it("can dock at a different port", () => {
        const dover = new Port("Dover");
        const ship = new Ship(dover);

        const calais = new Port("Calais");
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    });


});


