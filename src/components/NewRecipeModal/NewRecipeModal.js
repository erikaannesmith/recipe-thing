import "./NewRecipeModal.css";
import { useContext, useState } from "react";
import { Modal } from "../../components";
import { NewRecipeModalContext } from "../../contexts/NewRecipeModalContext";
import { Next, Back } from "../../icons";

export const NewRecipeModal = () => {
  const [_, setNewRecipeModalOpen] = useContext(NewRecipeModalContext);
  const [formStep, setFormStep] = useState(1);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  const emptyRecipe =
    !newRecipe.instructions ||
    !newRecipe.ingredients ||
    !newRecipe.title ||
    !newRecipe.description;

  const formatList = (string) =>
    string.split("- ").filter((string) => !!string);

  return (
    <Modal handleClose={() => setNewRecipeModalOpen(false)} title="New Recipe">
      <div className="form">
        {formStep === 1 && (
          <>
            <div className="form-inputs">
              <label>
                <div>Title</div>
                <input
                  value={newRecipe.title}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, title: e.target.value })
                  }
                />
              </label>
              <label>
                <div>Description</div>
                <textarea
                  value={newRecipe.description}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      description: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <div>Ingredients</div>
                <textarea
                  value={newRecipe.ingredients}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      ingredients: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <div>Instructions</div>
                <textarea
                  value={newRecipe.instructions}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      instructions: e.target.value,
                    })
                  }
                />
              </label>
            </div>
            <button
              disabled={emptyRecipe}
              className={`continue-btn ${emptyRecipe ? "disabled" : undefined}`}
              onClick={() => setFormStep(2)}
            >
              <Next />
            </button>
          </>
        )}
        {formStep === 2 && (
          <>
            <div className="review">
              <div>
                <span className="review-header">Title:</span> {newRecipe.title}
              </div>
              <div>
                <span className="review-header">Description:</span>{" "}
                {newRecipe.description}
              </div>
              <div>
                <span className="review-header">Ingredients:</span>{" "}
                <ul>
                  {formatList(newRecipe.ingredients).map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="review-header">Instructions:</span>{" "}
                <ul>
                  {formatList(newRecipe.instructions).map((instruction) => (
                    <li>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="back-btn" onClick={() => setFormStep(1)}>
              <Back />
            </button>
            <button className="continue-btn save-btn" onClick={() => {}}>
              SAVE
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};
