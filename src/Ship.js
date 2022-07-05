
class Ship {
    constructor () {
    this.currentPort = "Dover";
}

    dock(port) {
    this.currentPort = port;
}

    setSail() {
    if (this.setSail) {
        this.currentPort = false;
    }
}

};



module.exports = Ship;