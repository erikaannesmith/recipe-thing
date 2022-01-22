import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./views/App";
import { NewRecipeModalProvider } from "./contexts/NewRecipeModalContext";

ReactDOM.render(
  <BrowserRouter>
    <NewRecipeModalProvider>
      <App />
    </NewRecipeModalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
