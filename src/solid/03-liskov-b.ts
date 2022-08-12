export abstract class Vehicle {
  constructor(protected numberOfSeats: number) {}

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Tesla extends Vehicle {
  constructor(protected numberOfSeats: number) {
    super(numberOfSeats);
  }

  override getNumberOfSeats(): number {
    return this.numberOfSeats * 2;
  }
}

export class Audi extends Vehicle {}

export class Toyota extends Vehicle {}

export class Honda extends Vehicle {}

export class Volvo extends Vehicle {}
