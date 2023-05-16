import {
  Resource,
  component$,
  useResource$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "../../select-styles.css?inline";

interface Food {
  id: number;
  cuisine: string;
}

export const FoodSelector = component$(() => {
  useStylesScoped$(styles);

  const recipeResources = useResource$<Food[]>(async () => {
    const result = await fetch("https://api.sampleapis.com/recipes/recipes");
    return result.json();
  });
  return (
    <div>
      <Resource
        value={recipeResources}
        onPending={() => <span>loading ...</span>}
        onRejected={() => <span>error ...</span>}
        onResolved={(recipe) => (
          <select class="text-black">
            {recipe.map((food) => (
              <option key={food.id} class="text-black">
                {food.cuisine}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
});
