/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      type
      description
      brand
      createdAt
      updatedAt
      version
      owner
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        description
        brand
        createdAt
        updatedAt
        version
        owner
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      description
      image
      serves
      ingredients {
        id
        ingredient {
          id
          name
          type
          description
          brand
          createdAt
          updatedAt
          version
          owner
        }
        amount
        unit
      }
      method
      createdAt
      updatedAt
      version
      owner
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        serves
        ingredients {
          id
          amount
          unit
        }
        method
        createdAt
        updatedAt
        version
        owner
      }
      nextToken
    }
  }
`;
