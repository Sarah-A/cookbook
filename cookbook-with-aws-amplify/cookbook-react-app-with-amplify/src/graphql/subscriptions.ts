/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String!) {
    onCreateRecipe(owner: $owner) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($owner: String!) {
    onUpdateRecipe(owner: $owner) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($owner: String!) {
    onDeleteRecipe(owner: $owner) {
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
