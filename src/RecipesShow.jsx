export function RecipesShow(props) {
  return (
    <div>
      <h1>Recipe information</h1>
      <p>Recipe Name: {props.recipe.title}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Prep Time: {props.recipe.prep_time}</p>
      <p>Cook Time: {props.recipe.cook_time}</p>
      <p>Total Time: {props.recipe.total_time}</p>
      <p>Instructions: {props.recipe.instructions}</p>
    </div>
  );
}
