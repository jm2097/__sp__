import { Audi, Honda, Tesla, Toyota, Vehicle, Volvo } from "./03-liskov-b";

(() => {
  const printCarSeats = (cars: Vehicle[]) =>
    cars.forEach((car) =>
      console.log(car.constructor.name, car.getNumberOfSeats())
    );

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(7),
  ];

  printCarSeats(cars);
})();
