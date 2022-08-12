(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes extends HtmlElement {
    constructor(public value: string, public placeholder: string, id: string) {
      super(id, "input");
    }
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  class Input {
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor(id: string, value: string, placeholder: string) {
      this.attributes = new InputAttributes(value, placeholder, id);
      this.events = new InputEvents();
    }
  }

  const input = new Input("1", "test", "hola");

  console.log({ input });
})();
