// // Repice
// // - title
// // - description
// // - ingredients
// // - instructions
// // - created_at
// // - updated_at

const sampleRecipe = {
  description: "A fun recipe to try!",
  ingredients: [
    {
      name: "Cilantro",
      measurement: "1 tsp",
    },
    {
      name: "Avocado",
      measurement: "5 cups",
    },
  ],
  instructions: [
    "Mix together cilantro & avocado",
    "Put them in a bowl",
    "Let chill",
    "Eat!",
  ],
  created_at: "1/1/2020",
  updated_at: "1/2/2020",
  user_id: 2,
};

const recipes = [];

[...Array(20).keys()].forEach((key) => {
  recipes.push({ ...sampleRecipe, id: key, title: `Test Recipe ${key}` });
});

export default recipes;
