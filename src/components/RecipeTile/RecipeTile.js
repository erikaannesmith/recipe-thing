import "./RecipeTile.css";
import { Link } from "react-router-dom";

export const RecipeTile = ({ recipe }) => (
  <Link className="recipe-tile" to={`/recipes/${recipe.id}`}>
    {recipe.title}
    <div className="divider" />
    {recipe.description}
  </Link>
);
