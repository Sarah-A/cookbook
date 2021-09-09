/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  rating?: number | null,
  prepTimeInMinutes?: number | null,
  cookTimeInMinutes?: number | null,
  serves?: number | null,
  description?: string | null,
  images?: Array< string | null > | null,
};

export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  prepTimeInMinutes?: ModelIntInput | null,
  cookTimeInMinutes?: ModelIntInput | null,
  serves?: ModelIntInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  name: string,
  rating?: number | null,
  prepTimeInMinutes?: number | null,
  cookTimeInMinutes?: number | null,
  serves?: number | null,
  description?: string | null,
  images?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  rating?: number | null,
  prepTimeInMinutes?: number | null,
  cookTimeInMinutes?: number | null,
  serves?: number | null,
  description?: string | null,
  images?: Array< string | null > | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  prepTimeInMinutes?: ModelIntInput | null,
  cookTimeInMinutes?: ModelIntInput | null,
  serves?: ModelIntInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      rating?: number | null,
      prepTimeInMinutes?: number | null,
      cookTimeInMinutes?: number | null,
      serves?: number | null,
      description?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  owner: string,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  owner: string,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  owner: string,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    rating?: number | null,
    prepTimeInMinutes?: number | null,
    cookTimeInMinutes?: number | null,
    serves?: number | null,
    description?: string | null,
    images?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
