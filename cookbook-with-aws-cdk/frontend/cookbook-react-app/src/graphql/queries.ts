/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllRecipes = /* GraphQL */ `
  query GetAllRecipes {
    getAllRecipes {
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
export const getRecipeById = /* GraphQL */ `
  query GetRecipeById($id: ID!) {
    getRecipeById(id: $id) {
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
