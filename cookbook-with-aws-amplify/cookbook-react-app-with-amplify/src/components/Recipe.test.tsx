import { render , screen } from "@testing-library/react";
import Recipe from "./Recipe";
import type {RecipeForDisplayType} from "./Recipe";

const TEST_ID = "123";
const TEST_NAME = "Recipe Name";
const TEST_RATING = 4;
const TEST_PREP_TIME = 2;
const TEST_COOK_TIME = 45;
const TEST_IMAGE = "1.jpg";

const TEST_NORMAL_RECIPE = {
    id: TEST_ID,
    name: TEST_NAME,
    rating: TEST_RATING,
    prepTimeInMinutes: TEST_PREP_TIME,
    cookTimeInMinutes: TEST_COOK_TIME,
    image: TEST_IMAGE
};

const TEST_RECIPE_WITHOUT_IMAGE = {    
    id: TEST_ID,
    name: TEST_NAME,
    rating: TEST_RATING,
    prepTimeInMinutes: TEST_PREP_TIME,
    cookTimeInMinutes: TEST_COOK_TIME,
    image: null
};

const TEST_RECIPE_WITHOUT_RATING = {
    id: TEST_ID,
    name: TEST_NAME,
    prepTimeInMinutes: TEST_PREP_TIME,
    cookTimeInMinutes: TEST_COOK_TIME,
    image: TEST_IMAGE
};

const TEST_RECIPE_WITHOUT_PREP_TIME = {    
    id: TEST_ID,
    name: TEST_NAME,
    rating: TEST_RATING,    
    cookTimeInMinutes: TEST_COOK_TIME,
    image: "1.jpg"
};

const TEST_RECIPE_WITHOUT_COOK_TIME = {    
    id: TEST_ID,
    name: TEST_NAME,
    rating: TEST_RATING,
    prepTimeInMinutes: TEST_PREP_TIME,
    image: "1.jpg"
};

function verifyRenderedRecipe(expectedValues: RecipeForDisplayType) : void {
    expect(screen.getByTestId("recipe-card-title"))
        .toHaveTextContent(expectedValues.name);
    
    if (expectedValues.rating) {
        expect(screen.getByTestId("recipe-card-rating").textContent)
            .toBe("Rating: "+ expectedValues.rating.toString());
    } else {
        expect(screen.getByTestId("recipe-card-rating").textContent)
            .toBe("Rating: ");       
    }

    if (expectedValues.prepTimeInMinutes) {
        expect(screen.getByTestId("recipe-card-prep-time"))
            .toHaveTextContent(expectedValues.prepTimeInMinutes.toString());
    } else {
        expect(screen.queryByTestId("recipe-card-prep-time"))
            .toBeNull();
    }

    if (expectedValues.cookTimeInMinutes) {
        expect(screen.getByTestId("recipe-card-cook-time"))
            .toHaveTextContent(expectedValues.cookTimeInMinutes.toString());
    } else {
        expect(screen.queryByTestId("recipe-card-cook-time"))
            .toBeNull();
    }

    if( expectedValues.image === null) {
        expect(screen.queryByTestId("recipe-card-image"))
            .toBeNull();            
    }
    else {
        expect(screen.getByTestId("recipe-card-image").getAttribute("src"))
                .toContain(expectedValues.image);

    }
}

describe("test Recipe component", () => {
    test("When all fields exist, should display them correctly", () =>  {        
        render(<Recipe key={TEST_ID} {...(TEST_NORMAL_RECIPE)} />);
        verifyRenderedRecipe(TEST_NORMAL_RECIPE);        
    });

    test("When image is missing, should display without it", () =>  {        
        render(<Recipe key={TEST_ID} {...(TEST_RECIPE_WITHOUT_IMAGE)} />);
       verifyRenderedRecipe(TEST_RECIPE_WITHOUT_IMAGE);
        
    });

    test("When rating is missing, should display title without rating", () =>  {        
        render(<Recipe key={TEST_ID} {...(TEST_RECIPE_WITHOUT_RATING)} />);
       verifyRenderedRecipe(TEST_RECIPE_WITHOUT_RATING);        
    });

    test("When prep-time is missing, should not include this element", () =>  {        
        render(<Recipe key={TEST_ID} {...(TEST_RECIPE_WITHOUT_PREP_TIME)} />);
       verifyRenderedRecipe(TEST_RECIPE_WITHOUT_PREP_TIME);        
    });

    test("When cook-time is missing, should not include this element", () =>  {        
        render(<Recipe key={TEST_ID} {...(TEST_RECIPE_WITHOUT_COOK_TIME)} />);
       verifyRenderedRecipe(TEST_RECIPE_WITHOUT_COOK_TIME);        
    });
});