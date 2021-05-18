const Greeter = function (strategy) {
  this.strategy = strategy;
};

Greeter.prototype.greet = function () {
  return this.strategy();
};

const polite = function () {
  console.log("Hello");
};

const friendly = function () {
  console.log("Hi");
};

const bored = function () {
  console.log("Sup");
};

// usage
const politeGreeter = new Greeter(polite);
const friendlyGreeter = new Greeter(friendly);
const boredGreeter = new Greeter(bored);

politeGreeter.greet();
friendlyGreeter.greet();
boredGreeter.greet();

/* contrived example
function greet(type) {
    if (type === 'polite') {
        console.log("Hello")
    } else if (type === 'friendly') {
        console.log("Hi)
    } else {
        console.log("Sup")
    }
}
* */
