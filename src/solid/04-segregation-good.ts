(() => {
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): void;
  }

  interface RunningBird {
    run(): void;
  }

  interface SwimmingBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird {
    eat(): void {}
    fly(): void {}
  }

  class Hummingbird implements Bird, FlyingBird {
    eat(): void {}
    fly(): void {}
  }

  class Ostrich implements Bird, RunningBird {
    eat(): void {}
    run(): void {}
  }

  class Penguin implements Bird, RunningBird, SwimmingBird {
    eat(): void {}
    run(): void {}
    swim(): void {}
  }
})();
