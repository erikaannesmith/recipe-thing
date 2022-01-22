import { useContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { RecipeDetails } from "./RecipeDetails";
import { Header, Footer, NewRecipeModal } from "../components";
import { NewRecipeModalContext } from "../contexts/NewRecipeModalContext";

export const App = () => {
  const [newRecipeModalOpen, _] = useContext(NewRecipeModalContext);

  return (
    <>
      {newRecipeModalOpen && <NewRecipeModal />}
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
