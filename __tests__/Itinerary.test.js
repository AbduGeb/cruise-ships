const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary");



describe("Itinerary", () => {

    it("can be instantiated", () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it("can have ports", () => {
        const dover = jest.fn();
        const calais = jest.fn();

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });

});
