/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe($recipe: NewRecipeInput!) {
    createRecipe(recipe: $recipe) {
      id
      name
      description
      image
      serves
      ingredients
      method
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe($id: ID!, $recipe: UpdateRecipeInput!) {
    updateRecipe(id: $id, recipe: $recipe) {
      id
      name
      description
      image
      serves
      ingredients
      method
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id)
  }
`;
