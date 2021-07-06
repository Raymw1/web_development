const { EventEmitter } = require("events");

const ev = new EventEmitter();

// ev.on("Say Something", (name) => {
ev.once("Say Something", (name) => {
    console.log("I've listened to you " + name);
})

ev.emit("Say Something", "Pimba")
ev.emit("Say Something", "Rayan")
