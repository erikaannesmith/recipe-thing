import "./Recipes.css";
import { RecipeTile } from "../../components";

export const Recipes = ({ data }) => (
  <div className="recipes">
    {data.map((recipe) => (
      <RecipeTile recipe={recipe} key={recipe.id} />
    ))}
  </div>
);
