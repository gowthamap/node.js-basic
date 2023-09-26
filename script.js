const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", (data) => {
  console.log(data.text);
});

emitter.on("logout", (data) => {
  console.log(data.text);
});

emitter.emit("message", { text: "User logged" });

emitter.emit("message", { text: "User went to about page" });

emitter.emit("logout", { text: "User logout" });
