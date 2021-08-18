import { FunctionComponent } from "react";
import API, { graphqlOperation } from '@aws-amplify/api';
import { useEffect } from 'react';

const GetAllRecipes = `query getAllRecipes {
    getAllRecipes {
      id
      name
      description
      ingredients
      method
      serves
    }
}`;


async function getAllRecipes() {
    console.log("Before calling API");
    try {
        const allRecipes = await API.graphql(graphqlOperation(GetAllRecipes));
        console.log("After calling API");
        console.log(allRecipes);    
    } catch (error) {
        console.log(error);
    }
}

const Recipes : FunctionComponent = () => {

    useEffect(() => {
        void getAllRecipes();
    }, [])

    return (
        <div className="text-warning">
            Queried Recipes!!
        </div>
    );
}

export default Recipes;