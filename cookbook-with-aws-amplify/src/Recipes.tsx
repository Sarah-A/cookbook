import React, { FunctionComponent, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './graphql/queries';
import { Recipe } from './API';

interface IRecipes {
    data: {
        listRecipes: {
            items: Recipe;
        };
    };
};

const Recipes: FunctionComponent = () => {
    // const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const recipesData = await API.graphql(graphqlOperation(listRecipes)) as IRecipes;
            const recipesList = recipesData.data.listRecipes.items;
            console.log("recipes list: ", recipesList);
            // setRecipes(recipesList);
        } catch (error) {
            console.log("error on getting recipes: ", error);
        }
    }
    
    useEffect(() => {
        void fetchRecipes();
    }, []);

    return (
        <div>
            <p>in Recipes!</p>
        </div>
    );
}

export default Recipes;