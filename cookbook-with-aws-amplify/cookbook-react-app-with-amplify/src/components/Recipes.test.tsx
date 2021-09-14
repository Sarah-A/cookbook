import { render , screen } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Recipes from "./Recipes";
import { Recipe as RecipeType } from "../API";
// import { ReactElement } from "react";

const TEST_RECIPE_NORMAL: RecipeType = {
    __typename: "Recipe",
    id: "1",
    name: "Recipe1",
    rating: 1,
    prepTimeInMinutes: 2,
    cookTimeInMinutes: 3,
    images: ["1.jpg"],
    createdAt: "123",
    updatedAt: "123"
};

const TEST_RECIPE_WITHOUT_IMAGES_AND_RATING: RecipeType  = {
    __typename: "Recipe",
    id: "2",
    name: "Recipe2",    
    prepTimeInMinutes: 3,
    cookTimeInMinutes: 4,
    createdAt: "123",
    updatedAt: "123"
};

const TEST_RECIPE_WITH_EMPTY_IMAGES_AND_NO_COOK_TIME: RecipeType  = {
    __typename: "Recipe",
    id: "3",
    name: "Recipe3",
    rating: 3,
    prepTimeInMinutes: 4,    
    images: [],
    createdAt: "123",
    updatedAt: "123"
};
const TEST_RECIPES : RecipeType[] = [ 
    TEST_RECIPE_NORMAL, 
    TEST_RECIPE_WITHOUT_IMAGES_AND_RATING, 
    TEST_RECIPE_WITH_EMPTY_IMAGES_AND_NO_COOK_TIME
];

// const mockRecipe = {
//     __esModule: true,
//     default: jest.fn(() => {
//         <div data-testid="Recipe" />
//     })
// };
// jest.mock("./Recipe", () => () => mockRecipe);

// function verifyRecipeComponent(expectedRecipe : RecipeType , receivedElement: HTMLElement) : void {
//     expect(receivedElement.getAttribute("id")).toEqual(expectedRecipe.id);
//     if (expectedRecipe.cookTimeInMinutes !== undefined) {
//         expect(receivedElement.getAttribute("cookTimeInMinutes"))
//             .toEqual(expectedRecipe.cookTimeInMinutes?.toString());
//     } else {
//         expect(receivedElement.getAttribute("cookTimeInMinutes"))
//             .toBe("");
//     }
//     expect(receivedElement.getAttribute("id")).toEqual(expectedRecipe.id);
//     expect(receivedElement.getAttribute("id")).toEqual(expectedRecipe.id);
//     expect(receivedElement.getAttribute("id")).toEqual(expectedRecipe.id);
//     expect(receivedElement.getAttribute("id")).toEqual(expectedRecipe.id);
//     expect(receivedElement.getAttribute("id")).toEqual(expectedRecipe.id);
// }

describe("test Recipes component", () => {

    beforeEach(() => {
        jest.resetAllMocks();
    })


    test("displays 'No recipes found!` when no recipes", () => {
        const recipes = render(<Recipes recipes={[]} />);
        const notFoundMessage = recipes.getByText(/No recipes found!/i);
        expect(notFoundMessage).toBeInTheDocument();
    });

    test.skip("When available recipes, should call the expected component", () => {

        
        const Recipe = require("./Recipe");
        
        render(<Recipes recipes={TEST_RECIPES} />);

        const renderedRecipes = screen.getAllByTestId("Recipe");
        expect(renderedRecipes.length).toBe(TEST_RECIPES.length);
        expect(Recipe()).toBeCalledTimes(TEST_RECIPES.length);
        
        // for(let i=0 ; i<TEST_RECIPES.length ; i++) {
        //     const recipeElement = recipes.getByTestId("recipe-" + i.toString());
        //     const testRecipe = TEST_RECIPES.find(element => {
        //         element.id === recipeElement.getAttribute("id");
        //     })
        //     expect(testRecipe).toBeDefined();
        //     verifyRecipeComponent(testRecipe as Recipe, recipeElement);

        // }        
    });
    
    test("When available recipes, should match expected snapshot", () => {
        const renderer = createRenderer();
        renderer.render(<Recipes recipes={TEST_RECIPES} />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
   
});