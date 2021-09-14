import { FunctionComponent } from "react";
import { Recipe as RecipeType } from "../API";
import Recipe from "./Recipe";



const Recipes: FunctionComponent<{recipes: RecipeType[]}> = ({recipes}) => {
    return (
        <div>
            {              
                !recipes.length 
                    ? (<h2>No recipes found!</h2> ) 
                    : ( 
                        <div className="row">
                        {
                            recipes.map((recipe, index) => (
                                <Recipe 
                                    key={recipe.id}
                                    id={recipe.id}
                                    name={recipe.name}
                                    rating={recipe.rating}
                                    prepTimeInMinutes={recipe.prepTimeInMinutes}
                                    cookTimeInMinutes={recipe.cookTimeInMinutes}
                                    image={recipe.images?.length ? recipe.images[0] : null}
                                    data-testid={`recipe-${index}`}
                                />
                            ))
                        }
                        </div>
                        )
                }                 
        </div>
    );
}

export default Recipes;