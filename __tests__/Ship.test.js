/* globals describe it expect */
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary");


describe("Ship", () => {

    describe("with ports and an itinerary", () => {
        let ship;
        let dover;
        let calais;
        let itinerary;

        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name : "Dover",
                ships: []
            };

            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: "Calais",
                ships: []
            };

            itinerary = {
                ports: [dover, calais]
            };
            
            ship = new Ship(itinerary)
        });

        it("can be instantiated", () => {
    
            expect(ship).toBeInstanceOf(Object);
        });
    
        it("has a starting port", () => {
    
            expect(ship.currentPort).toBe(dover);
        });

        it("can set sail", () => {
            
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);  
        });
    
        it("gets added to port on instantiation", () => {
            
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });
    });
});

describe("setSail", () => {

    it("can\'t sail further than its itinerary", () => {
        const dover = new Port("Dover");
        const calais = new Port("Calais");
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
});

describe("dock", () => {
    
    it("can dock at a different port", () => {
        dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name : "Dover",
            ships: []
        };

        calais = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Calais",
            ships: []
        };

        itinerary = {
            ports: [dover, calais]
        };

        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.addShip).toHaveBeenCalledWith(ship);
        });


});
