import React, { Fragment } from "react";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";


function App() {

  return (
    <Fragment>
    
    <Cart />
      <Header />
      <main>
        <Meals />
      </main>

    </Fragment>
  );
};

export default App;
