/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIngredientInput = {
  id?: string | null,
  name: string,
  type: IngredientType,
  description?: string | null,
  brand?: string | null,
};

export enum IngredientType {
  FRUIT_AND_VEG = "FRUIT_AND_VEG",
  MEAT = "MEAT",
  SEAFOOD = "SEAFOOD",
  BAKERY = "BAKERY",
  DAIRY = "DAIRY",
  EGGS = "EGGS",
  PANTRY = "PANTRY",
  CHILLED = "CHILLED",
  FROZEN = "FROZEN",
}


export type ModelIngredientConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelIngredientTypeInput | null,
  description?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
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

export type ModelIngredientTypeInput = {
  eq?: IngredientType | null,
  ne?: IngredientType | null,
};

export type Ingredient = {
  __typename: "Ingredient",
  id: string,
  name: string,
  type: IngredientType,
  description?: string | null,
  brand?: string | null,
  createdAt: string,
  updatedAt: string,
  version: number,
  owner?: string | null,
};

export type UpdateIngredientInput = {
  id: string,
  name?: string | null,
  type?: IngredientType | null,
  description?: string | null,
  brand?: string | null,
  expectedVersion: number,
};

export type DeleteIngredientInput = {
  id: string,
  expectedVersion: number,
};

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image?: string | null,
  serves: number,
  ingredients: Array< IngredientWithAmountInput >,
  method: string,
};

export type IngredientWithAmountInput = {
  id: string,
  amount: number,
  unit: IngredientUnitsType,
};

export enum IngredientUnitsType {
  UNITS = "UNITS",
  SPOONS = "SPOONS",
  TEA_SPOONS = "TEA_SPOONS",
  GR = "GR",
  KG = "KG",
  CAN = "CAN",
  CUP = "CUP",
}


export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  serves?: ModelIntInput | null,
  method?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
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
  description?: string | null,
  image?: string | null,
  serves: number,
  ingredients:  Array<IngredientWithAmount >,
  method: string,
  createdAt: string,
  updatedAt: string,
  version: number,
  owner?: string | null,
};

export type IngredientWithAmount = {
  __typename: "IngredientWithAmount",
  id: string,
  ingredient: Ingredient,
  amount: number,
  unit: IngredientUnitsType,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  serves?: number | null,
  ingredients?: Array< IngredientWithAmountInput > | null,
  method?: string | null,
  expectedVersion: number,
};

export type DeleteRecipeInput = {
  id: string,
  expectedVersion: number,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelIngredientTypeInput | null,
  description?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
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

export type ModelIngredientConnection = {
  __typename: "ModelIngredientConnection",
  items?:  Array<Ingredient | null > | null,
  nextToken?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  serves?: ModelIntInput | null,
  method?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type CreateIngredientMutationVariables = {
  input: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    type: IngredientType,
    description?: string | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    version: number,
    owner?: string | null,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    type: IngredientType,
    description?: string | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    version: number,
    owner?: string | null,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    type: IngredientType,
    description?: string | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    version: number,
    owner?: string | null,
  } | null,
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
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients:  Array< {
      __typename: "IngredientWithAmount",
      id: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name: string,
        type: IngredientType,
        description?: string | null,
        brand?: string | null,
        createdAt: string,
        updatedAt: string,
        version: number,
        owner?: string | null,
      },
      amount: number,
      unit: IngredientUnitsType,
    } >,
    method: string,
    createdAt: string,
    updatedAt: string,
    version: number,
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
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients:  Array< {
      __typename: "IngredientWithAmount",
      id: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name: string,
        type: IngredientType,
        description?: string | null,
        brand?: string | null,
        createdAt: string,
        updatedAt: string,
        version: number,
        owner?: string | null,
      },
      amount: number,
      unit: IngredientUnitsType,
    } >,
    method: string,
    createdAt: string,
    updatedAt: string,
    version: number,
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
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients:  Array< {
      __typename: "IngredientWithAmount",
      id: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name: string,
        type: IngredientType,
        description?: string | null,
        brand?: string | null,
        createdAt: string,
        updatedAt: string,
        version: number,
        owner?: string | null,
      },
      amount: number,
      unit: IngredientUnitsType,
    } >,
    method: string,
    createdAt: string,
    updatedAt: string,
    version: number,
    owner?: string | null,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    type: IngredientType,
    description?: string | null,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
    version: number,
    owner?: string | null,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients?:  {
    __typename: "ModelIngredientConnection",
    items?:  Array< {
      __typename: "Ingredient",
      id: string,
      name: string,
      type: IngredientType,
      description?: string | null,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
      version: number,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
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
    description?: string | null,
    image?: string | null,
    serves: number,
    ingredients:  Array< {
      __typename: "IngredientWithAmount",
      id: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name: string,
        type: IngredientType,
        description?: string | null,
        brand?: string | null,
        createdAt: string,
        updatedAt: string,
        version: number,
        owner?: string | null,
      },
      amount: number,
      unit: IngredientUnitsType,
    } >,
    method: string,
    createdAt: string,
    updatedAt: string,
    version: number,
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
      description?: string | null,
      image?: string | null,
      serves: number,
      ingredients:  Array< {
        __typename: "IngredientWithAmount",
        id: string,
        amount: number,
        unit: IngredientUnitsType,
      } >,
      method: string,
      createdAt: string,
      updatedAt: string,
      version: number,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
