/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      rating
      prepTimeInMinutes
      cookTimeInMinutes
      serves
      description
      images
      createdAt
      updatedAt
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
        rating
        prepTimeInMinutes
        cookTimeInMinutes
        serves
        description
        images
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
