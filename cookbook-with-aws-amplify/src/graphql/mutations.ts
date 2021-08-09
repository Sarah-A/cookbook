/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
