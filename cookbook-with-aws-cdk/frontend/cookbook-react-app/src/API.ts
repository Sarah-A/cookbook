/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type NewRecipeInput = {
  id: string,
  name: string,
  description?: string | null,
  serves: number,
  ingredients: Array< string >,
  method: string,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  name: string,
  description?: string | null,
  image?: string | null,
  serves: number,
  ingredients: Array< string >,
  method: string,
};

export type UpdateRecipeInput = {
  name?: string | null,
  description?: string | null,
  image?: string | null,
  serves?: number | null,
  ingredients?: Array< string | null > | null,
  method?: string | null,
};

export type CreateRecipeMutationVariables = {
  recipe: NewRecipeInput,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients: Array< string >,
    method: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  id: string,
  recipe: UpdateRecipeInput,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients: Array< string >,
    method: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  id: string,
};

export type DeleteRecipeMutation = {
  deleteRecipe?: string | null,
};

export type GetAllRecipesQuery = {
  getAllRecipes?:  Array< {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients: Array< string >,
    method: string,
  } | null > | null,
};

export type GetRecipeByIdQueryVariables = {
  id: string,
};

export type GetRecipeByIdQuery = {
  getRecipeById?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients: Array< string >,
    method: string,
  } | null,
};
