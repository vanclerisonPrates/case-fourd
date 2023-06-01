import { createServer, Factory, Model } from "miragejs";
import { random } from "./utils/functions";

export default createServer({
  models: {
    myClass: Model,
  },

  factories: {
    myClass: Factory.extend({
      title() {
        return random([
          "Condicionais",
          "Switch Case",
          "While",
          "Do While",
          "Foreach",
          "Introdução a Lógica de Programação",
        ]);
      },
      view() {
        return random([1000, 520, 133, 20, 12, 1]);
      },
      category: "Lógica",
      date: 1685564202,
    }),
  },

  seeds(server) {
    server.createList("myClass", 6);
  },

  routes() {
    this.get("/my-classes", (schema): any => {
      const myClasses = schema.all("myClass")?.models;
      return myClasses;
    });
  },
});
