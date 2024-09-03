const car1 = {
  name: "Tiago",
  color: "red",
  engine: "Disel",
  transmission: "automatic",
};

const car2 = {
  name: "Tiago",
  color: "blue",
  engine: "Disel",
  transmission: "automatic",
};

const car3 = {
  name: "Safari",
  color: "black",
  engine: "Disel",
  transmission: "automatic",
};

const car4 = {
  name: "Safari",
  color: "red",
  engine: "Disel",
  transmission: "automatic",
};

function Car(name, color, engine, transmission) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.transmission = transmission;
  this.size = name === "tiago" ? "2m" : "5m";
}

const car5 = new Car("Safari", "black", "electric", "manual");
const car6 = new Car("tiago", "red", "electric", "manual");

console.log(car5);
console.log(car6);
