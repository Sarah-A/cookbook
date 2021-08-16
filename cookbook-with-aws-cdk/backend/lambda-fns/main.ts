import createRecipe from "./createRecipe";
import deleteRecipe from "./deleteRecipe";
import getAllRecipes from "./getAllRecipes";
import getRecipeById from "./getRecipeById";
import Recipe from "./Recipe";
import updateRecipe from "./updateRecipe";

type AppSyncEvent = {
    info: {
        fieldName: string
    },
    arguments: {
        recipeId: string,
        recipe: Recipe
    }
}

exports.handler = async (event: AppSyncEvent) => {
    switch (event.info.fieldName) {
        case "getRecipteById":
            return await getRecipeById(event.arguments.recipeId);
        case "getAllRecipes":
            return await getAllRecipes();
        case "createRecipe":
            return await createRecipe(event.arguments.recipe);
        case "updateRecipe":
            return await updateRecipe(
                event.arguments.recipeId, event.arguments.recipe);
        case "deleteRecipe":
            return await deleteRecipe(event.arguments.recipeId);
        default: 
            return null;
    }
}