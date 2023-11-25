const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Sipariş alındı: ${size} pizza, ${topping} ile`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "sucuk");
pizzaShop.displayOrderNumber();

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("orderPizza", (size, topping) => {
//   console.log(`Bir ${size} pizza pişiriliyor. İçindekiler: ${topping}`);
// });

// emitter.on("orderPizza", (size) => {
//   if (size === "large") {
//     console.log(`Ücretsiz içecek servisi.`);
//   }
// });

// emitter.emit("orderPizza", "small", "mantar");
