export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRecipe(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Recipe Name: <input name="name" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" type="text" />
        </div>
        <div>
          Prep Time: <input name="prep_time" type="text" />
        </div>
        <div>
          Cook Time: <input name="cook_time" type="text" />
        </div>
        <div>
          Total Time: <input name="total_time" type="text" />
        </div>
        <div>
          Instructions: <input name="instructions" type="text" />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}
