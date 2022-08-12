(() => {
  interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
  }

  class Tucan implements Bird {
    fly(): void {}
    eat(): void {}
    run(): void {}
    swim(): void {
      throw new Error("Doesn't swim.");
    }
  }

  class Hummingbird implements Bird {
    fly(): void {}
    eat(): void {}
    run(): void {}
    swim(): void {
      throw new Error("Doesn't swim.");
    }
  }

  class Ostrich implements Bird {
    fly(): void {
      throw new Error("Doesn't fly.");
    }
    eat(): void {}
    run(): void {}
    swim(): void {
      throw new Error("Doesn't swim.");
    }
  }

  class Penguin implements Bird {
    fly(): void {
      throw new Error("Doesn't fly.");
    }
    eat(): void {}
    run(): void {}
    swim(): void {}
  }
})();
