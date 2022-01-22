import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./views/App";
import { RecipeDetails } from "./views/RecipeDetails";
import { Header, Footer } from "./components";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <div className="page">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<App />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
