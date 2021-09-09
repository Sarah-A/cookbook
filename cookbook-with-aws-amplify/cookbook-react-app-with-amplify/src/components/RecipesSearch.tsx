import API from "@aws-amplify/api";
import { FunctionComponent, useEffect, useState } from "react";
import { listRecipes } from "../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { Recipe as RecipeType} from "../API";
import Recipes from "./Recipes";

interface GetRecipesResponseType {
    data: {
        listRecipes: {
            items : RecipeType[]
        }
    }
}

const RecipesSearch : FunctionComponent = () => {

    const [recipes, setRecipes] = useState([] as RecipeType[]);

    useEffect(() => {
        void getRecipes();
    }, []);
    
    async function getRecipes() {
        try {
            const queryData = await API.graphql(
                graphqlOperation(listRecipes)) as GetRecipesResponseType;
            const recipesList = queryData.data.listRecipes.items;
            console.log(recipesList);
            setRecipes(recipesList);
        } catch (error) {
            console.log('error on searching recipes', error);
        }
    }

    return (
        <div className="text-warning">
            {recipes.length > 0 ?
                <Recipes recipes={recipes}/> :
                <h2>No recipes found!</h2>
            }            
        </div>
    );
}

export default RecipesSearch;