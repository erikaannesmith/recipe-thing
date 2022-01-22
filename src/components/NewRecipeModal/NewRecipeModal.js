import "./NewRecipeModal.css";
import { useContext } from "react";
import { Exit } from "../../icons";
import { NewRecipeModalContext } from "../../contexts/NewRecipeModalContext";

export const NewRecipeModal = () => {
  const [_, setNewRecipeModalOpen] = useContext(NewRecipeModalContext);
  return (
    <>
      <div
        className="modal-layer"
        onClick={() => setNewRecipeModalOpen(false)}
      />
      <div className="new-recipe-modal">
        <button className="exit" onClick={() => setNewRecipeModalOpen(false)}>
          <Exit />
        </button>
      </div>
    </>
  );
};
