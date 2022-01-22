import "./RecipeDetails.css";
import { useParams } from "react-router-dom";
import recipeData from "../mockData/recipes";

export const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipeData.find((recipe) => recipe.id.toString() === id);
  return (
    <div className="recipe-details">
      <div>
        <span className="title">{recipe.title}</span>
        <div className="divider" />
        <span className="description">{recipe.description}</span>
      </div>
      <div className="how-to">
        <div>
          Ingedients:
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`ingredient-${index}`}>
                {ingredient.name}, {ingredient.measurement}
              </li>
            ))}
          </ul>
        </div>
        <div>
          Instructions:
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={`instruction-${index}`}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
