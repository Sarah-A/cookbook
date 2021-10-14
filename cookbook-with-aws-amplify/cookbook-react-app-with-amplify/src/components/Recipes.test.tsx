import { render } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Recipes from "./Recipes";
import { Recipe as RecipeType } from "../API";

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


describe("test Recipes component", () => {


    test("displays 'No recipes found!` when no recipes", () => {
        const recipes = render(<Recipes recipes={[]} />);
        const notFoundMessage = recipes.getByText(/No recipes found!/i);
        expect(notFoundMessage).toBeInTheDocument();
    });

    
    test("When available recipes, should match expected snapshot", () => {
        // Recipe(TEST_RECIPE_NORMAL);

        const renderer = createRenderer();
        renderer.render(<Recipes recipes={TEST_RECIPES} />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });

});