export function RecipesIndex(props) {
  return (
    <div>
      <h1>All recipes</h1>
      {props.recipes.map(
        // eslint-disable-line react/prop-types
        (recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Total Time: {recipe.total_time}</p>
            <p>Instructions: {recipe.instructions}</p>
          </div>
        )
      )}
    </div>
  );
}
