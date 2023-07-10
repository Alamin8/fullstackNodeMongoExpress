import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Pages from "./components/mainpages/Pages";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
