import { Aside, NavBar } from "./components";
import Banner from "./components/Banner";
import ChartComponent from "./components/ChartComponent";

import { Main } from "./containers";

import { useFetchClasses } from "./hooks/useFetchClasses";
import { useFetchTodayClasses } from "./hooks/useFetchTodayClasses";
import { useFetchCustomer } from "./hooks/useFetchCustomer";

import "./index.css";

function App() {
  const { classes } = useFetchClasses();
  const { todayClasses } = useFetchTodayClasses();
  const { customer } = useFetchCustomer();

  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <NavBar customer={customer} />
      <div className="flex flex-col gap-3 sm:grid-cols-[1fr,300px] sm:grid sm:gap-3 sm:grid-flow-col ">
        <div className="hidden sm:flex sm:flex-col gap-16">
          <Banner customer={customer} startAt={todayClasses?.[0].time} />
          <Main data={classes ?? []} />
        </div>
        <div className="hidden sm:flex sm:flex-col gap-4">
          <ChartComponent />
          <Aside data={todayClasses ?? []} />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:grid-cols-[1fr,300px] sm:grid sm:gap-3 sm:grid-flow-col sm:hidden">
        <Banner customer={customer} />
        <Main data={classes ?? []} />
        <ChartComponent />
        <Aside data={todayClasses ?? []} />
      </div>
    </div>
  );
}

export default App;
