import { useSearchParams } from "react-router-dom";
import recipeData from "../mockData/recipes";
import { Search, Recipes } from "../components";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const term = searchParams.get("term");

  const filteredRecipeData = term
    ? recipeData.filter(
        (data) =>
          data.title.toLowerCase().includes(term.toLowerCase()) ||
          data.description.toLowerCase().includes(term.toLowerCase())
      )
    : recipeData;

  return (
    <>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} />
      <Recipes data={filteredRecipeData} />
    </>
  );
};
