const EventEmitter = require("events");
const uuid = require("uuid");
// uuid - universally unique identifier

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
