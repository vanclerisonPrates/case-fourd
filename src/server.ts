import { createServer, Factory, Model } from "miragejs";
import { random } from "./utils/functions";
import { addHours } from "date-fns";

const classes = [
  "Condicionais",
  "Switch Case",
  "While",
  "Do While",
  "Foreach",
  "Introdução a Lógica de Programação",
];

export default createServer({
  models: {
    myClass: Model,
    schedulesToday: Model,
    customer: Model,
  },

  factories: {
    myClass: Factory.extend({
      title() {
        return random(classes);
      },
      view() {
        return random([1000, 520, 133, 20, 12, 1]);
      },
      category: "Lógica",
      date: 1685564202,
    }),
    schedulesToday: Factory.extend({
      title() {
        return random(classes);
      },
      time() {
        const hour = new Date();
        const date1 = addHours(hour, 2);
        const date2 = addHours(hour, 24);
        return random([date1, date2]);
      },
    }),
    customer: Factory.extend({
      name: "Annete Black",
      city: "Curitiba",
      state: "PR",
      photoUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      currentAmount: 1000,
    }),
  },

  seeds(server) {
    server.createList("myClass", 6);
    server.createList("schedulesToday", 2);
    server.create("customer");
  },

  routes() {
    this.get("/my-classes", (schema): any => {
      const myClasses = schema.all("myClass")?.models;
      return myClasses;
    });
    this.get("/schedules/today", (schema): any => {
      const scheduledToday = schema.all("schedulesToday")?.models;
      return scheduledToday;
    });
    this.get("/customer", (schema): any => {
      const customer = schema.first("customer")?.attrs;
      console.log(customer);
      return customer;
    });
  },
});
