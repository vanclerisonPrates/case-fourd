import { createServer, Factory, Model } from "miragejs";
import { random } from "./utils/functions";

const classes = [
  "Condicionais",
  "Switch Case",
  "While",
  "Do While",
  "Foreach",
  "Introdução a Lógica de Programação",
];

type Enviroment = "development";
interface Props {
  environment: Enviroment;
}

export function makeServer({ environment }: Props) {
  return createServer({
    environment,
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
        views() {
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
          const time1 = "08:00";
          const time2 = "09:00";
          return random([time1, time2]);
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
      server.createList("schedulesToday", 4);
      server.create("customer");
    },

    routes() {
      this.get(
        "https://iyt9skw6fe.execute-api.us-east-1.amazonaws.com/my-classes",
        (schema): any => {
          const myClasses = schema.all("myClass")?.models;
          return myClasses;
        }
      );
      this.get(
        "https://iyt9skw6fe.execute-api.us-east-1.amazonaws.com/schedules/today",
        (schema): any => {
          const scheduledToday = schema.all("schedulesToday")?.models;
          return scheduledToday;
        }
      );
      this.get("/customer", (schema): any => {
        const customer = schema.first("customer")?.attrs;
        return customer;
      });
    },
  });
}
