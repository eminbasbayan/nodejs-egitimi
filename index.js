const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("orderPizza", (size, topping) => {
  console.log(`Bir ${size} pizza pişiriliyor. İçindekiler: ${topping}`);
});

emitter.on("orderPizza", (size) => {
  if (size === "large") {
    console.log(`Ücretsiz içecek servisi.`);
  }
});

emitter.emit("orderPizza", "small", "mantar");
