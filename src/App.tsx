import React from "react";
import "./index.css";
import { Aside, ClassRow, NavBar } from "./components";
import { Main } from "./containers";
import Banner from "./components/Banner";
import { useFetchClasses } from "./hooks/useFetchClasses";
import "./server";

function App() {
  const { classes } = useFetchClasses();
  console.log("classes", classes);

  return (
    <div className="flex flex-col gap-9 sm:gap-12">
      <NavBar />
      <div className="flex flex-col gap-3 sm:grid-cols-[1fr,300px] sm:grid sm:gap-3">
        <div className="flex flex-col gap-3">
          <Banner />
        </div>
        <Main data={classes} />
        <Aside />
      </div>
    </div>
  );
}

export default App;
