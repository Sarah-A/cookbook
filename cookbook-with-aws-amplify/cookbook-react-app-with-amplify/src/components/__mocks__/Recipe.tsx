import { FunctionComponent } from "react";

export interface RecipeForDisplayType {
    id: string;
    name: string;
    rating?: number | null;
    prepTimeInMinutes?: number | null;
    cookTimeInMinutes?: number | null;
    image?: string | null;
}

const Recipe: FunctionComponent<RecipeForDisplayType> = (props: RecipeForDisplayType) => {

    // TODO: Add a link to the recipe details (once I add them)
    console.log(`In Recipe Mock!`);
    console.log(props);

    return(
        <div data-testid="recipe-mock">           
        </div>
    );

}

export default Recipe;