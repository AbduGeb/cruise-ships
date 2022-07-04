

function Ship() {
    this.startingPort = "Dover";

};

Ship.prototype.setSail = function() {
    if (this.setSail) {
        this.startingPort = false;
    }
}

module.exports = Ship;